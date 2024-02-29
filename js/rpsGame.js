function getComputerChoice() {
  // INIT computer choice
  let computerChoice = '';
  // SET random int to value between 0-99
  let randomInt = Math.floor(Math.random()*100);
  // IF random int is less than 33, THEN SET computer choice to rock
  if (randomInt < 33) {
    computerChoice = 'rock';
  }
  // ELSE IF random int is greater than 66, THEN SET computer choice to paper
  else if (randomInt > 66) {
    computerChoice = 'paper';
  }
  // ELSE SET the computer choice to scissor
  else {
    computerChoice = 'scissor'
  }

  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  selectionText.textContent = `You chose ${playerSelection}, the computer chose ${computerSelection}.`;
  switch(playerSelection) {
    case 'rock': {
      switch(computerSelection) {
        case 'rock': 
          resultText.textContent = "It's a tie.";
          break;
        case 'paper': 
          resultText.textContent = "Paper beats rock, the computer wins!";
          computerScore++;
          computerScoreboard.textContent = `${computerScore}`;
          break;
        case 'scissor':
          resultText.textContent = "Rock beats scissor, the player wins!";
          playerScore++;
          playerScoreboard.textContent = `${playerScore}`;
          break;
      }
      break;
    }
    case 'paper': {
      switch(computerSelection) {
        case 'rock': 
          resultText.textContent = "Paper beats rock, the player wins!";
          playerScore++;
          playerScoreboard.textContent = `${playerScore}`;
          break;
        case 'paper': 
          resultText.textContent = "It's a tie.";
          break;
        case 'scissor':
          resultText.textContent = "Scissor beats paper, the computer wins!";
          computerScore++;
          computerScoreboard.textContent = `${computerScore}`;
          break;
      }
      break;
    }
    case 'scissor': {
      switch(computerSelection) {
        case 'rock': 
          resultText.textContent = "Rock beats scissor, the computer wins!";
          computerScore++;
          computerScoreboard.textContent = `${computerScore}`;
          break;
        case 'paper': 
          resultText.textContent ="Scissor beats paper, the player wins!";
          playerScore++;
          playerScoreboard.textContent = `${playerScore}`;
          break;
        case 'scissor':
          resultText.textContent = "It's a tie.";
          break;
      }
      break;
    }
  }
}

let playerChoice = '';

function getPlayerChoice() {
  playerChoice = prompt("Rock, Paper, or Scissor?").toLowerCase();
  if ((playerChoice !== 'rock') && (playerChoice !== 'paper') && (playerChoice !== 'scissor')) {
    getPlayerChoice();
  }
  return playerChoice;
}

let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissor');

rockButton.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});
paperButton.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});
scissorButton.addEventListener('click', () => {
  playRound('scissor', getComputerChoice())
});

const selectionText = document.querySelector('#selection');
const resultText = document.querySelector('#result');

const playerScoreboard = document.querySelector('#playerScoreboard');
const computerScoreboard = document.querySelector('#computerScoreboard');