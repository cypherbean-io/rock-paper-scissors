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