

const synth = window.speechSynthesis;
let voices = [];
getAllVoices();
synth.onvoiceschanged = getAllVoices;

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


    function getAllVoices() {
  voices = synth.getVoices() || [];
  // Optional: filter/sort voices if you need specific languages/genders
  // Example: voices = voices.filter(v => v.lang.startsWith('en'));
console.table(voices);

}
getAllVoices();