export function copyBibText(bibPath) {
    fetch(bibPath)
      .then(response => response.text())
      .then(bibText => navigator.clipboard.writeText(bibText))
      .then(() => { alert('Bib text copied!'); })
      .catch(err => { console.error('Error copying bib text:', err); });
}
