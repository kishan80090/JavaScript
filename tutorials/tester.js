
const waitms=10;
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
function speakWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  // Optional: set voice, pitch, rate, volume
  // utterance.voice = voices.find(v => v.lang === 'en-US');
  synth.speak(utterance);
}
async function showOneWord(sentence) {

  let words = sentence.split(" ");
  for (let word of words) {
    totaldiv.innerHTML = word;
    displayDiv.innerHTML = `${displayDiv.innerHTML} ${word}`;
    speakWord(word);
    await wait(waitms);

  }
}


function getAllVoices() {
  voices = synth.getVoices() || [];
  // Optional: filter/sort voices if you need specific languages/genders
  // Example: voices = voices.filter(v => v.lang.startsWith('en'));
  console.table(voices);

}
getAllVoices();