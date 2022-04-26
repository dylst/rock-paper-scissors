const options = ["rock", "paper", "scissors"];

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `${playerSelection} vs ${computerSelection}, it's a tie!`;
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return `You lose! ${playerSelection} loses to ${computerSelection}!`;
  } else {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  }
}

const computerPlay = function () {
  const choice = Math.floor(Math.random() * 3);
  return options[choice];
};

const play = function () {
  let score = [0, 0];
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    const result = playRound(playerSelection, computerPlay());
    if (result.includes("win")) {
      score[0]++;
    } else if (result.includes("lose")) {
      score[1]++;
    }
    console.log(result);
    console.log(`The score is ${score[0]}-${score[1]}`);
  }
};
play();
