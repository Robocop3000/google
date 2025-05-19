function search() {
  const query = document.querySelector('.search-box').value;
  if (query) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  }
}

function lucky() {
  window.open('https://www.google.com/doodles', '_blank');
}
