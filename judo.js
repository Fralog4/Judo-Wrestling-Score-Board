// Judoka 1
const yukoButton = document.getElementById('yuko');
const wazaButton = document.getElementById('waza-ari');
const ipponButton = document.getElementById('ippon');
const shidoButton = document.getElementById('shido');
const hansokuButton = document.getElementById('hansoku-make');

const pointsDisplay = document.getElementById('points-display');
const shidoContainer = document.getElementById('shido-container');
const yukoDisplay1 = document.getElementById('yuko-display'); 

let judokaOnePoints = 0;
let yukoPoints1 = 0;
let admonitionJudokaOneCounter = 0;
let isFinished = false;

[wazaButton, ipponButton, yukoButton, shidoButton, hansokuButton]
  .forEach(btn => btn.classList.add('judoka-button'));

wazaButton.addEventListener('click', () => {
  if (isFinished) return;
  judokaOnePoints += 1;
  pointsDisplay.textContent = judokaOnePoints;
  checkWinner();
});
ipponButton.addEventListener('click', () => {
  if (isFinished) return;
  judokaOnePoints += 10;
  pointsDisplay.textContent = judokaOnePoints;
  checkWinner();
});
yukoButton.addEventListener('click', () => {
  if (isFinished) return;
  yukoDisplay1.classList.remove('is-hidden');
  yukoPoints1 += 1;
  yukoDisplay1.textContent = yukoPoints1;
  checkWinner();
});

shidoButton.addEventListener('click', () => {
    if (isFinished) return;
  
    admonitionJudokaOneCounter += 1;
    checkWinner();
  
    if(admonitionJudokaOneCounter <=2){
        const fig = document.createElement('figure');
        fig.className = 'image is-32x32';
      
        const img = document.createElement('img');
        img.src = 'images/yellow-card.jpg'; 
        img.alt = 'Shido';
      
        fig.appendChild(img);
        shidoContainer.appendChild(fig);
    } else if (admonitionJudokaOneCounter === 3) {
        const fig = document.createElement('figure');
        fig.className = 'image is-48x48';
      
        const img = document.createElement('img');
        img.src = 'images/red-card.jpg'; 
        img.alt = 'Hansoku Make';
      
        fig.appendChild(img);
        shidoContainer.appendChild(fig);
    }
  });

hansokuButton.addEventListener('click', () => {
    if (isFinished) return;
    admonitionJudokaOneCounter += 3;
    checkWinner();
    
    const fig = document.createElement('figure');
    fig.className = 'image is-48x48';
    
    const img = document.createElement('img');
    img.src = 'images/red-card.jpg'; 
    img.alt = 'Hansoku Make';
    
    fig.appendChild(img);
    shidoContainer.appendChild(fig);
    });
// Judoka 2
const yukoButtonTwo = document.getElementById('yuko-two');
const wazaButtonTwo = document.getElementById('waza-ari-two');
const ipponButtonTwo = document.getElementById('ippon-two');
const shidoButtonTwo = document.getElementById('shido-two');
const hansokuButtonTwo = document.getElementById('hansoku-make-two');

const pointsDisplayTwo = document.getElementById('points-display-two');
const shidoContainerTwo = document.getElementById('shido-container-two');
const yukoDisplay2 = document.getElementById('yuko-display-two'); 

let judokaTwoPoints = 0;
let yukoPoints2 = 0;
let admonitionJudokaTwoCounter = 0;

[wazaButtonTwo, ipponButtonTwo, yukoButtonTwo, shidoButtonTwo, hansokuButtonTwo]
  .forEach(btn => btn.classList.add('judoka-button'));

wazaButtonTwo.addEventListener('click', () => {
  if (isFinished) return;
  judokaTwoPoints += 1;
  pointsDisplayTwo.textContent = judokaTwoPoints;
  checkWinner();
});
ipponButtonTwo.addEventListener('click', () => {
  if (isFinished) return;
  judokaTwoPoints += 10;
  pointsDisplayTwo.textContent = judokaTwoPoints;
  checkWinner();
});
yukoButtonTwo.addEventListener('click', () => {
  if (isFinished) return;
  // Rendi visibile il punteggio
  yukoDisplay2.classList.remove('is-hidden');
  yukoPoints2 += 1;
  yukoDisplay2.textContent = yukoPoints2;
  checkWinner();
});

shidoButtonTwo.addEventListener('click', () => {
    if (isFinished) return;
  
    admonitionJudokaTwoCounter += 1;
    checkWinner();
  
    if(admonitionJudokaTwoCounter <=2){
        const fig = document.createElement('figure');
        fig.className = 'image is-32x32';
      
        const img = document.createElement('img');
        img.src = 'images/yellow-card.jpg'; 
        img.alt = 'Shido';
      
        fig.appendChild(img);
        shidoContainerTwo.appendChild(fig);
    } else if (admonitionJudokaTwoCounter === 3) {
        const fig = document.createElement('figure');
        fig.className = 'image is-48x48';
      
        const img = document.createElement('img');
        img.src = 'images/red-card.jpg'; 
        img.alt = 'Hansoku Make';
      
        fig.appendChild(img);
        shidoContainerTwo.appendChild(fig);
    }
  });
hansokuButtonTwo.addEventListener('click', () => {
  if (isFinished) return;
  admonitionJudokaTwoCounter += 3;
  checkWinner();

  const fig = document.createElement('figure');
  fig.className = 'image is-48x48';

  const img = document.createElement('img');
  img.src = 'images/red-card.jpg';
  img.alt = 'Hansoku Make';

  fig.appendChild(img);
  shidoContainerTwo.appendChild(fig);
});

// Controllo vincitore
function checkWinner() {
  if (judokaOnePoints >= 10) {
    declareWinner("Judoka 1 wins by Ippon!");
  } else if (judokaTwoPoints >= 10) {
    declareWinner("Judoka 2 wins by Ippon!");
  } else if (admonitionJudokaOneCounter >= 3) {
    declareWinner("Judoka 1 is disqualified!");
  } else if (admonitionJudokaTwoCounter >= 3) {
    declareWinner("Judoka 2 is disqualified!");
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
  judokaOnePoints = 0;
  judokaTwoPoints = 0;
  yukoPoints1 = 0;
  yukoPoints2 = 0;
  admonitionJudokaOneCounter = 0;
  admonitionJudokaTwoCounter = 0;
  isFinished = false;
  document.querySelectorAll('#shido-container figure, #shido-container-two figure').forEach(fig => fig.remove());

  pointsDisplay.textContent = judokaOnePoints;
  yukoDisplay1.textContent = yukoPoints1;
  yukoDisplay1.classList.add('is-hidden'); // Nascondi il punteggio Yuko
  yukoDisplay2.textContent = yukoPoints2;
  yukoDisplay2.classList.add('is-hidden'); // Nascondi il punteggio Yuko
  pointsDisplayTwo.textContent = judokaTwoPoints;
  if (shidoContainer) shidoContainer.textContent = '';
  if (shidoContainerTwo) shidoContainerTwo.textContent = '';

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
