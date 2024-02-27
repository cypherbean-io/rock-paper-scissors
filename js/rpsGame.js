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
  console.log(`You chose ${playerSelection}, the computer chose ${computerSelection}.`);
  switch(playerSelection) {
    case 'rock': {
      switch(computerSelection) {
        case 'rock': 
          console.log("It's a tie.");
          break;
        case 'paper': 
          console.log("Paper beats rock, the computer wins!");
          computerScore++;
          break;
        case 'scissor':
          console.log("Rock beats scissor, the player wins!");
          playerScore++;
          break;
      }
      break;
    }
    case 'paper': {
      switch(computerSelection) {
        case 'rock': 
          console.log("Paper beats rock, the player wins!");
          playerScore++;
          break;
        case 'paper': 
          console.log("It's a tie.");
          break;
        case 'scissor':
          console.log("Scissor beats paper, the computer wins!");
          computerScore++;
          break;
      }
      break;
    }
    case 'scissor': {
      switch(computerSelection) {
        case 'rock': 
          console.log("Rock beats scissor, the computer wins!");
          computerScore++;
          break;
        case 'paper': 
          console.log("Scissor beats paper, the player wins!");
          playerScore++;
          break;
        case 'scissor':
          console.log("It's a tie.");
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