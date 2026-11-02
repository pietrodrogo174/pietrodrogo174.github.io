const { getStore, connectLambda } = require('@netlify/blobs');
const crypto = require('node:crypto');
const MAX = 3 * 1024 * 1024;
const types = {'application/pdf':'.pdf','image/jpeg':'.jpg','image/png':'.png','application/vnd.openxmlformats-officedocument.wordprocessingml.document':'.docx','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':'.xlsx','text/plain':'.txt'};
const headers = {'Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Access-Control-Allow-Origin':'same-origin'};
const json=(statusCode,data)=>({statusCode,headers:{...headers,'Content-Type':'application/json; charset=utf-8'},body:JSON.stringify(data)});
function authorized(event){const expected=process.env.PORTFOLIO_ADMIN_PASSWORD;const given=event.headers['x-admin-password'];if(!expected||!given)return false;const a=crypto.createHash('sha256').update(expected).digest();const b=crypto.createHash('sha256').update(given).digest();return crypto.timingSafeEqual(a,b)}
exports.handler=async(event)=>{
 try{
 connectLambda(event);
 const method=event.httpMethod;
 if(method==='POST' || method==='DELETE'){
  if(!authorized(event))return json(401,{error:'Access denied'});
 }
 const store=getStore('public-recruiter-documents');
 if(method==='GET'){
  const id=event.queryStringParameters?.id;
  if(id){if(!/^[a-f0-9-]{36}$/.test(id))return json(400,{error:'Invalid id'});
   const meta=await store.get('meta-'+id,{type:'json'});if(!meta)return json(404,{error:'Not found'});
   const bytes=await store.get('file-'+id,{type:'arrayBuffer'});if(!bytes)return json(404,{error:'Not found'});
   return {statusCode:200,isBase64Encoded:true,headers:{...headers,'Content-Type':meta.type,'Content-Disposition':"attachment; filename*=UTF-8''"+encodeURIComponent(meta.name)},body:Buffer.from(bytes).toString('base64')};
  }
  const keys=await store.list({prefix:'meta-',paginate:false});const docs=[];
  for(const entry of keys.blobs){const meta=await store.get(entry.key,{type:'json'});if(meta)docs.push(meta)}
  docs.sort((a,b)=>b.created.localeCompare(a.created));return json(200,{documents:docs});
 }
 if(method==='POST'){
  if(event.body?.length>MAX*1.5)return json(413,{error:'File too large'});
  const payload=JSON.parse(event.body||'{}');const {name,type,data}=payload;
  if(typeof name!=='string'||name.length>180||name.includes('/')||name.includes('\\')||!types[type]||typeof data!=='string'||!/^[-A-Za-z0-9+/=]+$/.test(data))return json(400,{error:'Invalid file'});
  const bytes=Buffer.from(data,'base64');if(bytes.length===0||bytes.length>MAX)return json(413,{error:'File must be between 1 byte and 3 MB'});
  if(!name.toLowerCase().endsWith(types[type]))return json(400,{error:'File type and extension mismatch'});
  // Reject common masquerading formats using basic file signatures.
  if(type==='application/pdf'&&bytes.subarray(0,5).toString()!=='%PDF-')return json(400,{error:'Invalid PDF'});
  if(type==='image/png'&&bytes.subarray(0,8).toString('hex')!=='89504e470d0a1a0a')return json(400,{error:'Invalid PNG'});
  if(type==='image/jpeg'&&bytes.subarray(0,3).toString('hex')!=='ffd8ff')return json(400,{error:'Invalid JPEG'});
  if((type.includes('openxmlformats'))&&bytes.subarray(0,2).toString()!=='PK')return json(400,{error:'Invalid Office document'});
  const id=crypto.randomUUID();const meta={id,name,type,size:bytes.length,created:new Date().toISOString()};
  await store.set('file-'+id,bytes,{metadata:{type}});await store.setJSON('meta-'+id,meta);
  return json(201,{document:meta});
 }
 if(method==='DELETE'){
  const id=JSON.parse(event.body||'{}').id;if(typeof id!=='string'||!/^[a-f0-9-]{36}$/.test(id))return json(400,{error:'Invalid id'});
  await store.delete('file-'+id);await store.delete('meta-'+id);return json(200,{deleted:true});
 }
 return json(405,{error:'Method not allowed'});
 }catch(e){console.error('Documents function error:',e);return json(500,{error:'Service error'});}
};
