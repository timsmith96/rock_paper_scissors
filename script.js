function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    const compChoice =options[Math.floor(Math.random() * options.length)];
    return compChoice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        console.log('You Lose! Paper beats Rock')
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        console.log('You  Win! Rock beats Scissors');
    } else if(playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        console.log('You Win! Paper beats Rock');
    } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        console.log('You Lose! Scissors beat Paper')
    } else if(playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        console.log('You Lose! Rock beats scissors')
    } else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        console.log('You win! Scissors beat paper')
    } else if(playerSelection === computerSelection) {
        console.log("It's a tie!")
    } else {
        console.log('Oops, something went wrong')
    }
}


function game() {
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt('Enter your selection')
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    if(playerScore > computerScore) {
        console.log('You win!')
    } else if (playerScore < computerScore) {
        console.log('You lose!')
    } else {
        console.log('It\'s a tie!')
    }
}

game();