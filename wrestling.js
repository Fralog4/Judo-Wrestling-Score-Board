
//Lottatore 1

const onePointButton = document.getElementById('one-point');
const twoPointButton = document.getElementById('two-points');
const fourPointButton = document.getElementById('four-points');
const fivePointButton = document.getElementById('five-points');
const yellowCardButton = document.getElementById('yellow-card');
const redCardButton = document.getElementById('red-card');
const pointsDisplayWrestler = document.getElementById('points-display-wrestling');
const yellowCardContainer = document.getElementById('yellow-container')

let isFinishedWrestler = false;


let wrestlerOnePoints = 0;
let admonitionWrestlerOneCounter = 0;

[onePointButton, twoPointButton, fourPointButton, fivePointButton, yellowCardButton, redCardButton]
  .forEach(btn => btn.classList.add('wrestler-button'));


onePointButton.addEventListener('click', () => {
  if (isFinishedWrestler) return;
  wrestlerOnePoints += 1;
  pointsDisplayWrestler.textContent = wrestlerOnePoints;
  checkWinnerWrestler();
});

twoPointButton.addEventListener('click', () => {
  if (isFinishedWrestler) return;
  wrestlerOnePoints += 2;
  pointsDisplayWrestler.textContent = wrestlerOnePoints;
  checkWinnerWrestler();
});
fourPointButton.addEventListener('click', () => {
  if (isFinishedWrestler) return;
  wrestlerOnePoints += 4;
  pointsDisplayWrestler.textContent = wrestlerOnePoints;
  checkWinnerWrestler();
});
fivePointButton.addEventListener('click', () => {
  if (isFinishedWrestler) return;
  wrestlerOnePoints += 5;
  pointsDisplayWrestler.textContent = wrestlerOnePoints;
  checkWinnerWrestler();
});
yellowCardButton.addEventListener('click', () => {
  if (isFinishedWrestler) return;

  admonitionWrestlerOneCounter += 1;
  checkWinnerWrestler();

  if(admonitionWrestlerOneCounter <=2){
      const fig = document.createElement('figure');
      fig.className = 'image is-32x32';
    
      const img = document.createElement('img');
      img.src = 'images/yellow-card.jpg'; 
      img.alt = 'Shido';
    
      fig.appendChild(img);
      yellowCardContainer.appendChild(fig);
  } else if (admonitionWrestlerOneCounter === 3) {
      const fig = document.createElement('figure');
      fig.className = 'image is-48x48';
    
      const img = document.createElement('img');
      img.src = 'images/red-card.jpg'; 
      img.alt = 'Hansoku Make';
    
      fig.appendChild(img);
      yellowCardContainer.appendChild(fig);
  }
});
redCardButton.addEventListener('click', () => {
  if (isFinishedWrestler) return;
  admonitionWrestlerOneCounter += 3;
  checkWinnerWrestler();

  const fig = document.createElement('figure');
  fig.className = 'image is-48x48';

  const img = document.createElement('img');
  img.src = 'images/red-card.jpg';
  img.alt = 'Hansoku Make';

  fig.appendChild(img);
  yellowCardContainer.appendChild(fig);
});


// Lottatore 2

const onePointButtonTwo = document.getElementById('one-point2');
const twoPointButtonTwo = document.getElementById('two-points2');
const fourPointButtonTwo = document.getElementById('four-points2');
const fivePointButtonTwo = document.getElementById('five-points2');
const yellowCardButtonTwo = document.getElementById('yellow-card2');
const redCardButtonTwo = document.getElementById('red-card2');
const pointsDisplayWrestlerTwo = document.getElementById('points-display-wrestling-two');
const yellowCardContainerTwo = document.getElementById('yellow-container-two')


let wrestlerTwoPoints = 0;

let admonitionWrestlerTwoCounter = 0;

[onePointButtonTwo, twoPointButtonTwo, fourPointButtonTwo, fivePointButtonTwo, yellowCardButtonTwo, redCardButtonTwo]
  .forEach(btn => btn.classList.add('wrestler-button-two'));

onePointButtonTwo.addEventListener('click', () => {
  if (isFinishedWrestler) return;
  wrestlerTwoPoints += 1;
  pointsDisplayWrestlerTwo.textContent = wrestlerTwoPoints;
  checkWinnerWrestler();
});
twoPointButtonTwo.addEventListener('click', () => {
  if (isFinishedWrestler) return;
  wrestlerTwoPoints += 2;
  pointsDisplayWrestlerTwo.textContent = wrestlerTwoPoints;
  checkWinnerWrestler();
});
fourPointButtonTwo.addEventListener('click', () => {
  if (isFinishedWrestler) return;
  wrestlerTwoPoints += 4;
  pointsDisplayWrestlerTwo.textContent = wrestlerTwoPoints;
  checkWinnerWrestler();
});
fivePointButtonTwo.addEventListener('click', () => {
  if (isFinishedWrestler) return;
  wrestlerTwoPoints += 5;
  pointsDisplayWrestlerTwo.textContent = wrestlerTwoPoints;
  checkWinnerWrestler();
});
yellowCardButtonTwo.addEventListener('click', () => {
  if (isFinishedWrestler) return;

  admonitionWrestlerTwoCounter += 1;
  checkWinnerWrestler();

  if(admonitionWrestlerTwoCounter <=2){
      const fig = document.createElement('figure');
      fig.className = 'image is-32x32';
    
      const img = document.createElement('img');
      img.src = 'images/yellow-card.jpg'; 
      img.alt = 'Shido';
    
      fig.appendChild(img);
      yellowCardContainerTwo.appendChild(fig);
  } else if (admonitionWrestlerTwoCounter === 3) {
      const fig = document.createElement('figure');
      fig.className = 'image is-48x48';
    
      const img = document.createElement('img');
      img.src = 'images/red-card.jpg'; 
      img.alt = 'Hansoku Make';
    
      fig.appendChild(img);
      yellowCardContainerTwo.appendChild(fig);
  }
});
redCardButtonTwo.addEventListener('click', () => {
  if (isFinishedWrestler) return;
  admonitionWrestlerTwoCounter += 3;
  checkWinnerWrestler();

  const fig = document.createElement('figure');
  fig.className = 'image is-48x48';

  const img = document.createElement('img');
  img.src = 'images/red-card.jpg';
  img.alt = 'Hansoku Make';

  fig.appendChild(img);
  yellowCardContainerTwo.appendChild(fig);
});



// Controllo vincitore

function checkWinnerWrestler() {
  if (wrestlerOnePoints - wrestlerTwoPoints >= 10) {
    declareWinner("Wrestler 1 wins!");
  } else if (wrestlerTwoPoints - wrestlerOnePoints >= 10) {
    declareWinner("Wrestler 2 wins!");
  } else if (admonitionWrestlerOneCounter >= 3) {
    declareWinner("Wrestler 1 is disqualified!");
  } else if (admonitionWrestlerTwoCounter >= 3) { 
    declareWinner("Wrestler 2 is disqualified!");
  }
}


function declareWinner(message) {
  alert(message);
  isFinished = true;
  disableAllButtons();
}

function disableAllButtons() {
  // disabilita tutti i button tranne il reset
  document
    .querySelectorAll('button:not(#reset-button)')
    .forEach(btn => btn.disabled = true);
}

// Reset
const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {
    // Reset dei punteggi e degli avvisi
    wrestlerOnePoints = 0;
    wrestlerTwoPoints = 0;
    admonitionWrestlerOneCounter = 0;
    admonitionWrestlerTwoCounter = 0;
    isFinishedWrestler = false;
    pointsDisplayWrestler.textContent = wrestlerOnePoints;
    pointsDisplayWrestlerTwo.textContent = wrestlerTwoPoints;
    yellowCardContainer.innerHTML = '';
    yellowCardContainerTwo.innerHTML = '';
    pointsDisplayWrestlerTwo.textContent = wrestlerTwoPoints;
    pointsDisplayWrestler.textContent = wrestlerOnePoints;
    if (yellowCardContainer) yellowCardContainer.textContent = '';
    if (yellowCardContainerTwo) yellowCardContainerTwo.textContent = '';
    clearInterval(timerInterval); // Ferma il timer se in esecuzione
    timerDisplay.value = '5:00'; // Reset del timer

    // riabilita tutti i button tranne il reset
    document
      .querySelectorAll('button:not(#reset-button)')
      .forEach(btn => btn.disabled = false);
});

const timerDisplay = document.getElementById('timer-display');
const startTimerButton = document.getElementById('start-timer');
const stopTimerButton = document.getElementById('stop-timer');

let totalTime = 5 * 60; // 5 minuti in secondi
let timerInterval = null;

startTimerButton.addEventListener('click', () => {
  if (timerInterval) return; // evita avvii multipli

  timerInterval = setInterval(() => {
    if (totalTime <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      alert('Tempo scaduto!');
      disableAllButtons();
      return;
    }

    totalTime -= 1;
    updateTimerDisplay();
  }, 1000);
});

stopTimerButton.addEventListener('click', () => {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
});

function updateTimerDisplay() {
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  timerDisplay.value = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
