function computerPlay() {
  const options = ['rock', 'paper', 'scissors'];
  const compChoice = options[Math.floor(Math.random() * options.length)];
  return compChoice;
}

let roundNumber = 1;

const buttons = document.querySelectorAll('.btn');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const results = document.querySelector('.results');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const restartButton = document.querySelector('.restart');
const currentPlayer = document.querySelector('.current-player');
const currentComputer = document.querySelector('.current-computer');

restartButton.addEventListener('click', (e) => {
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  buttons.forEach((button) => (button.disabled = false));
  results.innerHTML = '';
  currentComputer.innerHTML = '';
  currentPlayer.innerHTML = '';
  roundNumber = 1;
});

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    compChoice = computerPlay();
    let playerChoice;
    if (e.currentTarget.classList.contains('rock')) {
      playerChoice = 'rock';
      currentPlayer.innerHTML = '<i class="far fa-hand-rock fa-8x"></i>';
    }
    if (e.currentTarget.classList.contains('paper')) {
      playerChoice = 'paper';
      currentPlayer.innerHTML = '<i class="fa-regular fa-hand fa-8x"></i>';
    }
    if (e.currentTarget.classList.contains('scissors'))
      playerChoice = 'scissors';
    currentPlayer.innerHTML = '<i class="far fa-hand-scissors fa-8x"></i>';
    playRound(playerChoice, compChoice);
    updateCurrentButton(playerChoice);
    updateComputerButton(compChoice);
  });
});

function updateScores(winner) {
  if (winner === 'player') playerScore.textContent++;
  if (winner === 'computer') computerScore.textContent++;
  if (playerScore.textContent === '5' || computerScore.textContent === '5') {
    const winningMessage = document.createElement('h3');
    winningMessage.textContent = `GAME OVER! ${winner.toUpperCase()} WON.`;
    results.prepend(winningMessage);
    buttons.forEach((button) => (button.disabled = true));
  }
}

function formatOutput(round, result, playerSelection, computerSelection) {
  const output = document.createElement('p');
  output.textContent = `ROUND #${round} You played ${playerSelection}, computer played ${computerSelection}. You ${result} this round!`;
  results.prepend(output);
}

function updateCurrentButton(playerSelection) {
  if (playerSelection === 'rock') {
    currentPlayer.innerHTML = '<i class="far fa-hand-rock fa-8x"></i>';
  }
  if (playerSelection === 'paper') {
    currentPlayer.innerHTML = '<i class="fa-regular fa-hand fa-8x"></i>';
  }
  if (playerSelection === 'scissors') {
    currentPlayer.innerHTML = '<i class="far fa-hand-scissors fa-8x"></i>';
  }
}

function updateComputerButton(computerSelection) {
  if (computerSelection === 'rock') {
    currentComputer.innerHTML = '<i class="far fa-hand-rock fa-8x"></i>';
  }
  if (computerSelection === 'paper') {
    currentComputer.innerHTML = '<i class="fa-regular fa-hand fa-8x"></i>';
  }
  if (computerSelection === 'scissors') {
    currentComputer.innerHTML = '<i class="far fa-hand-scissors fa-8x"></i>';
  }
}

function playRound(playerSelection, computerSelection) {
  let winner;
  console.log(playerSelection, computerSelection);
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    winner = 'computer';
    formatOutput(roundNumber, 'lose', playerSelection, computerSelection);
  }
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    winner = 'player';
    formatOutput(roundNumber, 'win', playerSelection, computerSelection);
  }
  if (playerSelection === 'paper' && computerSelection === 'rock') {
    winner = 'player';
    formatOutput(roundNumber, 'win', playerSelection, computerSelection);
  }
  if (playerSelection === 'paper' && computerSelection === 'scissors') {
    winner = 'computer';
    formatOutput(roundNumber, 'lose', playerSelection, computerSelection);
  }
  if (playerSelection === 'scissors' && computerSelection === 'rock') {
    winner = 'computer';
    formatOutput(roundNumber, 'lose', playerSelection, computerSelection);
  }
  if (playerSelection === 'scissors' && computerSelection === 'paper') {
    winner = 'player';
    formatOutput(roundNumber, 'win', playerSelection, computerSelection);
  }
  if (playerSelection === computerSelection) {
    formatOutput(roundNumber, 'draw', playerSelection, computerSelection);
  }
  roundNumber++;
  updateScores(winner);
}
