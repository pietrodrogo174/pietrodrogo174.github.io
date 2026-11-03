// Only PDFs deliberately uploaded to documents/ belong to this library.
(async () => {
  const list = document.getElementById('public-doc-list');
  const status = document.getElementById('public-doc-status');
  if (!list || !status) return;
  const {repository, branch, directory} = window.PORTFOLIO_DOCUMENTS;
  const api = 'https://api.github.com/repos/' + repository + '/contents/' + directory + '?ref=' + encodeURIComponent(branch);
  try {
    const response = await fetch(api, {headers: {Accept: 'application/vnd.github+json'}, cache: 'no-store'});
    if (!response.ok) throw new Error('Archive unavailable');
    const entries = await response.json();
    if (!Array.isArray(entries)) throw new Error('Invalid response');
    const documents = entries.filter(file => file.type === 'file' && /\.pdf$/i.test(file.name));
    documents.sort((a, b) => a.name.localeCompare(b.name));
    list.replaceChildren();
    status.textContent = documents.length ? documents.length + ' document(s) available' : 'No additional documents published yet.';
    for (const doc of documents) {
      const item = document.createElement('li');
      const name = document.createElement('span');
      const link = document.createElement('a');
      name.textContent = doc.name + ' (' + (doc.size / 1048576).toFixed(2) + ' MB)';
      // Construct the URL from trusted repository coordinates, never from file content.
      link.href = 'https://raw.githubusercontent.com/' + repository + '/' + encodeURIComponent(branch) + '/' + directory + '/' + encodeURIComponent(doc.name);
      link.textContent = 'OPEN / DOWNLOAD';
      link.target = '_blank';
      link.rel = 'noopener';
      item.append(name, link);
      list.append(item);
    }
  } catch {
    list.replaceChildren();
    status.textContent = 'Document list temporarily unavailable. ';
    const fallback = document.createElement('a');
    fallback.href = 'https://github.com/' + repository + '/tree/' + encodeURIComponent(branch) + '/' + directory;
    fallback.textContent = 'View published documents on GitHub';
    fallback.target = '_blank';
    fallback.rel = 'noopener';
    status.append(fallback);
  }
})();
