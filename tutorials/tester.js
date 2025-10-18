const displayDiv = document.getElementById('dd');
const totaldiv = document.getElementById('currentdiv');
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function addWord(word, className) {
  
  const p = document.createElement('p');
  p.className = className;
  p.textContent = word;
  displayDiv.appendChild(p);
}
 async function showOneWord(sentence) {
      
      let words = sentence.split(" ");
      for (let word of words) {
        totaldiv.innerHTML = word;
        displayDiv.innerHTML = `${displayDiv.innerHTML} ${word}`;
        await wait(5000);

      }
    }
