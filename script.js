let current = 0;
let vocab = [];

async function loadVocab() {
  const res = await fetch('vocab.json');
  vocab = await res.json();
  showWord();
}

function showWord() {
  const word = vocab[current];
  const container = document.getElementById('word-container');
  container.innerHTML = `
    <h2>${word.koreanWord}</h2>
    <p><strong>Meaning:</strong> ${word.wordMeaning}</p>
    <p><strong>Example:</strong> ${word.exampleSentence}</p>
    <audio controls src="${word.koreanWordVoice}"></audio>
  `;
}

document.getElementById('next-word').addEventListener('click', () => {
  current = (current + 1) % vocab.length;
  showWord();
});

loadVocab();
