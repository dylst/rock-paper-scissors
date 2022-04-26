// DOM selections
const playBtn = document.querySelector(".btn-play");
const mainPage = document.querySelector(".main-page");
const gamePage = document.querySelector(".game-page");
const optionsContainer = document.querySelector(".game-options");
const gameResult = document.querySelector(".game-result");
const gameScore = document.querySelector(".game-score");

// Game variables
const options = ["Fire", "Water", "Grass"];
let playerSelection = "";
let score = [0, 0];
let gameOver = false;
const computerPlay = function () {
  const choice = Math.floor(Math.random() * 3);
  return options[choice];
};

const player = function (elem) {
  if (elem.classList.contains("btn-fire")) {
    return "Fire";
  }
  if (elem.classList.contains("btn-water")) {
    return "Water";
  }
  if (elem.classList.contains("btn-leaf")) {
    return "Grass";
  }
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `${playerSelection} vs ${computerSelection}. It's a tie!`;
  } else if (
    (playerSelection === "Fire" && computerSelection === "Water") ||
    (playerSelection === "Water" && computerSelection === "Grass") ||
    (playerSelection === "Grass" && computerSelection === "Fire")
  ) {
    return `You lose! ${playerSelection} loses to ${computerSelection}!`;
  } else {
    return `You win! ${playerSelection} beats ${computerSelection}!`;
  }
}

const displayResult = function (result) {
  if (gameOver) return;
  if (result.includes("win")) {
    score[0]++;
  } else if (result.includes("lose")) {
    score[1]++;
  }
  if (score[0] === 5 || score[1] === 5) {
    gameOver = true;
    optionsContainer.removeEventListener("click", game);
    const res = score[0] === 5 ? "won" : "lost";
    return `You ${res}! The final score is ${score[0]}-${score[1]}.`;
  }
  return `The score is ${score[0]}-${score[1]}`;
};

const game = function (e) {
  if (
    e.target.classList.contains("fa-solid") ||
    e.target.firstElementChild.classList.contains("fa-solid")
  ) {
    const playerSelection = player(e.target.closest(".btn-game"));
    gameResult.textContent = playRound(playerSelection, computerPlay());
    gameScore.textContent = displayResult(gameResult.textContent);
  }
};

// Event Listeners
playBtn.addEventListener("click", function () {
  mainPage.style.display = "none";
  gamePage.style.display = "flex";
});

optionsContainer.addEventListener("click", game);
