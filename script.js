const careers = [
 [
  "2022 – Present",
  "Rig Manager / Superintendent",
  "Petreven Brazil – MEIL Group",
  "Rio Grande do Norte & Salvador de Bahia, Brazil",
  [
   "Managed drilling operations for HH102 and HH300 rigs.",
   "Oversaw budgeting, operational cost control and budget performance monitoring.",
   "Conducted API Level IV inspections for equipment certification renewal.",
   "Coordinated Rig moves between wells and countries, coordinating land and sea logistics.",
   "Monitored rig performance, reducing NPT and downtime.",
   "Maintained direct client relations for problem resolution and technical consultancy regarding operations and planning of future wells.",
   "Supervised spare parts orders and critical stock to ensure uninterrupted operations.",
   "Selected consumable materials in collaboration with maintenance, ensuring an optimal balance of quality, durability, and cost.",
   "Actively collaborated with clients to propose operational solutions to recurring issues."
  ]
 ],
 [
  "2021–2022",
  "Superintendent",
  "Petreven Perú – MEIL Group",
  "Talara, Piura, Peru",
  [
   "Simultaneously managed four drilling rigs serving different clients (CNPC, SAPET, GMP-UNNA, and others).",
   "Coordinated all operational activities, personally visiting and supervising each rig on different days to address and resolve operational issues.",
   "Maintained direct client relations for problem resolution and technical consultancy regarding ongoing operations and planning of future wells.",
   "Managed rig performance KPIs and compared operational costs against budget figures, taking personal accountability for all cost items with detailed statistics and reports.",
   "Implemented MBO programs to incentivize personnel, successfully achieving targets and providing justified reports when goals were not met.",
   "Supervised spare parts orders and critical stock to ensure uninterrupted operations while avoiding unnecessary purchases.",
   "Selected consumable materials in collaboration with maintenance to optimize quality, durability, and cost-effectiveness.",
   "Proposed operational solutions to recurring problems in direct collaboration with clients."
  ]
 ],
 [
  "2020 – 2021",
  "Senior Toolpusher",
  "Petreven India (for Schlumberger / Cairn)",
  "Rajasthan, India",
  [
   "Managed HH200 rig for gas wells under H2S conditions, ensuring compliance with strict safety regulations.",
   "Coordinated daily operations, performance tracking, and cost management in line with budget objectives.",
   "Maintained direct communication with client representatives to address operational challenges and propose optimized drilling solutions.",
   "Supervised procurement and inventory of critical components to prevent operational downtime.",
   "Coordinated initiatives to improve rig performance KPIs and reduce NPT."
  ]
 ],
 [
  "2018 – 2019",
  "Rig Manager",
  "Petreven Argentina – MEIL Group",
  "Argentina",
  [
   "Responsible for RIG UP projects for two Drillmec rigs (HH104 and HH108) for clients Panamerican Energy and YPF.",
   "Managed all aspects of the project including planning, scheduling, and execution in close collaboration with the maintenance team.",
   "Oversaw maintenance planning, logistics for transport and internal services, and Level IV API inspections for rigs, tubular equipment, and tools.",
   "Coordinated external services in line with daily planned activities, including welding, painting, and specialized inspections.",
   "Led daily planning meetings, prepared daily progress reports, and updated Microsoft Project schedules covering operational, HR, and financial aspects.",
   "Controlled and reported on all project costs, including third-party services, spare parts, raw materials, transportation, travel, and administration, ensuring detailed cost tracking and project delivery within schedule.",
   "Implemented HSEQ procedures, special permits, and personnel training programs in collaboration with the HSEQ department."
  ]
 ],
 [
  "2015 – 2018",
  "Superintendent",
  "Petreven Chile – ENEL Green Power (Geothermal)",
  "Pampa Apacheta, Andes, Chile – HH220 EXTREME WINTERIZED",
  [
   "Managed geothermal drilling operations at 4500m altitude for a 48 MW power plant project.",
   "Coordinated operational planning, logistics, and budget control for a high-altitude, high-complexity environment.",
   "Worked closely with clients to develop solutions to technical challenges affecting drilling performance.",
   "Oversaw spare parts logistics, procurement strategies, and performance monitoring to ensure operational efficiency."
  ]
 ],
 [
  "2012 – 2014",
  "Superintendent",
  "Petreven Venezuela – Gruppo Trevi",
  "Venezuela",
  [
   "Supervised wellsite activities for two Drillmec HH-series rigs (HH200 and HH300).",
   "Managed drilling operations for clustered wells, executing complex projects with challenging geometries and directional drilling requirements specified by client PDVSA.",
   "Utilized oil-based mud systems to enhance drilling performance and mitigate wellbore problems, which remained a constant operational challenge.",
   "Applied specialized directional drilling tools and techniques to resolve stuck pipe incidents, perform sidetracks, back-off operations, and wireline runs for special logging services."
  ]
 ],
 [
  "2006 – 2012",
  "Senior Toolpusher / Drilling Supervisor",
  "Petreven Perú – Gruppo Trevi",
  "Perú",
  [
   "Drilled over 500 wells (oil & gas), achieving top daily advance records.",
   "Managed maintenance, API inspections, client relations, and ISO certifications.",
   "Developed leadership skills and operational strategies that would later define superintendent-level performance."
  ]
 ]
];
document.querySelector('#career-list').innerHTML = careers.map((c,i)=>`<article class="career-row"><div class="career-date ${i===0?'current':''}">${i===0?'● ':''}${c[0]}</div><details><summary><h3>${c[1]}</h3><div class="career-meta"><span>${c[2]}</span>${c[3]}</div></summary><ul>${c[4].map(t=>`<li>${t}</li>`).join('')}</ul></details></article>`).join('');
const groups = [
 ['Drilling site civil works','engineering'],['Cellar construction','engineering'],['Cellar reinforcement detail','engineering'],['Well positioning & PAD layout','engineering'],
 ['Site arrangement drawing','engineering'],['Rig layout & interfaces','engineering'],['Rig floor components legend','engineering'],['Move planning schedule','logistics'],
 ['Detailed project scheduling','logistics'],['Planned versus actual progress','performance'],['Route planning & location','logistics'],['Transport load arrangements','logistics'],
 ['Transport engineering procedure','logistics'],['Trailer load configuration','logistics'],['Component dimensions & handling','logistics'],['Transport heights & clearances','logistics'],
 ['Load arrangement drawing','logistics'],['Route survey · overhead constraints','logistics'],['Route survey · access conditions','logistics'],['Geological lithology of the well','logistics'],
 ['Client contractual performance KPIs','engineering'],['Well casing design','engineering'],['Client contractual BHA specifications','engineering'],['Operational performance analysis','performance'],
 ['Performance dashboard','performance'],['Operating time analysis','performance'],['Cost variance monitoring','performance'],['Operational cost reporting','performance'],
 ['Personnel training programme (extract)','performance'],['HSEQ procedures','performance'],['Scheduled inspections programme','performance'],['Behavioural audit programme','performance'],
 ['Superintendent and Rig Manager field visit programme','logistics'], ['Crane positioning & rig assembly','engineering'],['Atmospheric separator · CAD design and equipment adaptation','engineering'],
 ['Drill-string tonnage and kilometre tracking','performance'],['Drill-string component rotation-hour register','performance'],['Mud pump operating hours and consumable tracking','performance'],['Daily diesel inventory, deliveries and consumption','performance']
];
const labels={engineering:'SITE & ENGINEERING',logistics:'MOVES & LOGISTICS',performance:'PERFORMANCE & COST'};
let filter='all',expanded=false,currentImage=0;
const projects=document.querySelector('#projects');
function renderProjects(){let selected=groups.map((g,i)=>({title:g[0],category:g[1],i})).filter(g=>filter==='all'||g.category===filter);const shown=expanded?selected:selected.slice(0,6);projects.innerHTML=shown.map(g=>`<button class="project-card" data-image="${g.i}" aria-label="View ${g.title}"><div class="project-image"><img src="${`assets/exhibit-${String(g.i+1).padStart(2,'0')}.png`}" alt="${g.title} — original portfolio evidence" loading="lazy" width="700" height="490"><span aria-hidden="true">↗</span></div><small>${String(g.i+1).padStart(2,'0')} / ${labels[g.category]}</small><h3>${g.title}</h3></button>`).join('');const more=document.querySelector('#show-more');more.hidden=selected.length<=6;more.innerHTML=expanded?'Show less <span>↑</span>':`View all ${selected.length} exhibits <span>↗</span>`;}
renderProjects();
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;expanded=false;document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});renderProjects();}));
document.querySelector('#show-more').addEventListener('click',()=>{expanded=!expanded;renderProjects();if(!expanded)document.querySelector('#portfolio').scrollIntoView({behavior:'smooth'});});
const competencies=[
 ['Technical design & equipment adaptation','2D/3D AutoCAD drafting, equipment configuration reviews and technical adaptations aligned with client specifications, contractual scope, site interfaces and operational requirements. Includes atmospheric separator layout and piping specifications.'],
 ['Rig moves & execution planning','Site readiness, georeferenced PAD layouts, well positioning, skidding, dismantling, transport, assembly and commissioning. Detailed schedules link task dependencies, crews, cranes, trucks and specialist contractors.'],
 ['Equipment integrity & maintenance','Full-cycle rig equipment responsibility, from technical readiness, commissioning and operational reliability to troubleshooting, maintenance planning, inspection and recertification. Coordination of multidisciplinary maintenance teams, critical spares, equipment history, condition monitoring and API Level IV inspection programmes across integrated drilling systems—not limited to individual components.'],
 ['Drilling & well control readiness','End-to-end supervision of onshore oil, gas and geothermal drilling operations: well programme execution, operational risk assessment, drilling parameters, hole cleaning, hydraulics, wellbore stability, tripping, casing and cementing interfaces, pressure control and response to abnormal conditions. Coordination of crews and specialist services, including operations in H2S environments.'],
 ['Performance, budgets & cost control','Operational and financial accountability across rig campaigns: PT/NPT classification, productive time, planned-versus-actual progress, cost forecasting, budget variance and corrective actions. Monitoring of equipment running hours, maintenance intervals, diesel and industrial-water consumption, materials, logistics and transport performance to support client reporting and management decisions.'],
 ['HSEQ & crew leadership','Leadership of safe, compliant drilling execution through risk-based planning, Permit to Work, LOTO, simultaneous operations control, incident prevention, emergency preparedness, inspections, audits and crew competency development. Direct accountability for effective communication and coordination across clients, contractors and multicultural teams.'],
 ['Automation & digital operations','Operational understanding of automated hydraulic rigs, control architecture and integrated drilling data. Use of HMI/PLC diagnostics, electrical and hydraulic schematics, sensor trends, EDR systems and equipment histories to support troubleshooting, reliability and informed operational decisions.'],
];
document.querySelector('#competencies').innerHTML=competencies.map((c,i)=>`<details class="competency" ${i===0?'open':''}><summary>${c[0]}</summary><p>${c[1]}</p></details>`).join('');
const dialog=document.querySelector('#lightbox');
let returnFocus;
function showImage(index){currentImage=(index+groups.length)%groups.length;const g=groups[currentImage];document.querySelector('#lightbox-title').textContent=g[0];document.querySelector('#lightbox-image').src=`assets/exhibit-${String(currentImage+1).padStart(2,'0')}.png`;document.querySelector('#lightbox-image').alt=g[0]+' — original technical evidence';document.querySelector('#image-counter').textContent=`${currentImage+1} / ${groups.length}`;}
projects.addEventListener('click',event=>{const card=event.target.closest('[data-image]');if(!card)return;returnFocus=card;showImage(Number(card.dataset.image));dialog.showModal();document.body.classList.add('modal-open');});
document.querySelector('#close-lightbox').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{document.body.classList.remove('modal-open');returnFocus?.focus();});
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
document.querySelector('#previous').addEventListener('click',()=>showImage(currentImage-1));document.querySelector('#next').addEventListener('click',()=>showImage(currentImage+1));dialog.addEventListener('keydown',event=>{if(event.key==='ArrowRight')showImage(currentImage+1);if(event.key==='ArrowLeft')showImage(currentImage-1);});
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}});
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)nav.querySelectorAll('a').forEach(a=>{const active=a.getAttribute('href')==='#'+entry.target.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});});},{rootMargin:'-15% 0px -65% 0px'});document.querySelectorAll('main>section[id]').forEach(s=>observer.observe(s));document.querySelector('#year').textContent=new Date().getFullYear();

// Native-resolution Word evidence topic navigation
document.querySelectorAll('[data-evidence-tab]').forEach(btn=>btn.addEventListener('click',()=>{const id=btn.dataset.evidenceTab;document.querySelectorAll('[data-evidence-tab]').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn))});document.querySelectorAll('[data-evidence-group]').forEach(g=>g.hidden=g.dataset.evidenceGroup!==id)}));
const pdfInput=document.getElementById('local-pdf');const pdfLink=document.getElementById('local-pdf-link');let localPdfUrl=null;if(pdfInput&&pdfLink){pdfInput.addEventListener('change',()=>{if(localPdfUrl)URL.revokeObjectURL(localPdfUrl);const file=pdfInput.files&&pdfInput.files[0];if(!file){pdfLink.hidden=true;return;}localPdfUrl=URL.createObjectURL(file);pdfLink.href=localPdfUrl;pdfLink.textContent='OPEN SELECTED PDF: '+file.name+' ↗';pdfLink.hidden=false;});}
