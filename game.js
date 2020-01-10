"use strict"

function computerPlay() {
    const rn = randomNumber();
    let pick;
  
    if (rn === 0) {
      pick = 'Rock';
    } else if (rn === 1) {
      pick = 'Paper';
    } else {
      pick = 'Scissors';
    }
  
    return pick;
  }
  
  function randomNumber() {
    return Math.floor(Math.random() * 3);
  }
  
  function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const comp = computerSelection.toLowerCase();
    let result;
  
    showPicks(playerSelection, computerSelection);
  
    if ((player === 'rock' && comp === 'scissors') ||
        (player === 'scissors' && comp === 'paper') ||
        (player === 'paper' && comp === 'rock')) {
          result = 'player';
          updateScore('player');
    } else if ((player === 'rock' && comp === 'rock') ||
              (player === 'scissors' && comp === 'scissors') ||
              (player === 'paper' && comp === 'paper')) {
                result = 'tie';
    } else {
      result = 'comp';
      updateScore('comp');
    }
  
    showRoundWL(result);
  
    checkScore();
  }
  
  function showPicks(player, comp) {
    const pPick = document.querySelector('.player-pick'); 
    const cPick = document.querySelector('.comp-pick');
  
    pPick.textContent = player;
    cPick.textContent = comp;
  }
  
  function showRoundWL(winner) {
    clearPrevRound();
    if (winner === 'tie') {
      const divs = document.querySelectorAll('.score div');
      divs.forEach(div => div.classList.add('tie'));
      return;
    }
  
    const winDiv = document.querySelector(`.${winner}-pick`);
    const loseDiv = document.querySelector(`.score div:not(.${winner}-pick)`)
  
    winDiv.classList.add('win');
    loseDiv.classList.add('lose');
  }
  
  function updateScore(winner) {
    const score = document.querySelector(`#${winner}`);
    score.innerText = +score.innerText + 1;
  }
  
  function checkScore() {
    const pScore = document.querySelector('#player').textContent;
    const cScore = document.querySelector('#comp').textContent;
    let message;
  
    if (+pScore == 5) {
      message = 'You\'ve won!';
      grade(message);
    } else if (+cScore == 5) {
      message = 'You\'ve lost!';
      grade(message);
    }
  }
  
  function grade(msg) {
    const section = document.querySelector('.winner');
  
    const div = document.createElement('div');
    div.classList.add('message');
    div.textContent = msg;
  
    const btn = document.createElement('button');
    btn.classList.add('btn', 'reset');
    btn.textContent = 'Play Again?';
  
    section.append(div, btn);
  
    const reset = document.querySelector('.reset');
    reset.addEventListener('click', resetGame);
  }
  
  function clearPrevRound() {
    const pPick = document.querySelector('.player-pick'); 
    const cPick = document.querySelector('.comp-pick');
    pPick.classList.remove('tie', 'win', 'lose');
    cPick.classList.remove('tie', 'win', 'lose');
  }
  
  function resetGame() {
    const pScore = document.querySelector('#player');
    const cScore = document.querySelector('#comp');
    const winner = document.querySelector('.winner');
    const pPick = document.querySelector('.player-pick'); 
    const cPick = document.querySelector('.comp-pick');
  
    pPick.textContent = '-';
    cPick.textContent = '-';
    pScore.textContent = '0';
    cScore.textContent = '0';
    winner.innerHTML = '';
  }
  
  const buttons = document.querySelectorAll('.buttons button');
  buttons.forEach(button => button.addEventListener(
    'click', (e) => playRound(e.target.textContent, computerPlay())
  ));