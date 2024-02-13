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
  switch(playerSelection) {
    case 'rock': {
      switch(computerSelection) {
        case 'rock': 
          return "It's a tie.";
          break;
        case 'paper': 
          return "Paper beats rock, the computer wins!";
          break;
        case 'scissor':
          return "Rock beats scissor, the player wins!";
          break;
      }
    }
    case 'paper': {
      switch(computerSelection) {
        case 'rock': 
          return "Paper beats rock, the player wins!";
          break;
        case 'paper': 
          return "It's a tie.";
          break;
        case 'scissor':
          return "Scissor beats paper, the computer wins!";
          break;
      }
    }
    case 'scissor': {
      switch(computerSelection) {
        case 'rock': 
          return "Rock beats scissor, the computer wins!";
          break;
        case 'paper': 
          return "Scissor beats paper, the player wins!";
          break;
        case 'scissor':
          return "It's a tie.";
          break;
      }
    }
    default: return "ERROR, please refresh the page to restart the game."
  }
}