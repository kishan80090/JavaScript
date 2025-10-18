
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function showWord(word, className) {
  const displayDiv = document.getElementById('dd');
  const p = document.createElement('p');
  p.className = className;
  p.textContent = word;
  displayDiv.appendChild(p);
}
