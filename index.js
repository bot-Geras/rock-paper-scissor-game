const computerDisplay = document.getElementById("computer-results");
const userDisplay = document.getElementById("user-results");
const resultDisplay = document.getElementById("result");
const possibleChoice = document.querySelectorAll("button");
const resetBtn = document.getElementById("Reset");
const playerScoreHtml = document.getElementById("player");
const computerScoreHtml = document.getElementById("computer");
const movesLeft = document.getElementById("moves");
const displayContainer = document.getElementById("container");

let userChoice;
let computerChoice;
let results;

let playerScore = 0;
let computerScore = 0;
let moves = 0;

function getUserChoice(e) {
  userChoice = e.target.id;
  userDisplay.innerHTML = userChoice;
  moves++;
  movesLeft.textContent = `${10 - moves}`;
  generateComputerChoice();
  getResults();
  if (moves === 10) {
    reloadGame();
  }
}

function generateComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }

  computerDisplay.innerHTML = computerChoice;
}

function getResults() {
  if (computerChoice === userChoice) {
    results = "its a Draw";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    results = "You Won";
    playerScore++;
    playerScoreHtml.textContent = playerScore;
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    results = "You lost";
    computerScore++;
    computerScoreHtml.textContent = computerScore;
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    results = "You win";
    playerScore++;
    playerScoreHtml.textContent = playerScore;
  }
  if (computerChoice === "paper" && userChoice === "Rock") {
    results = "You lost";
    computerScore++;
    computerScoreHtml.textContent = computerScore;
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    results = "You Won";
    playerScore++;
    playerScoreHtml.textContent = playerScore;
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    results = "you lost";
    computerScore++;
    computerScoreHtml.textContent = computerScore;
  }
  resultDisplay.innerHTML = results;
}
function gameOver(playerScore, computerScore) {
  playerScoreHtml.innerHTML = playerScore;
  computerScoreHtml.innerHTML = computerScore;
}

possibleChoice.forEach((choice) =>
  choice.addEventListener("click", getUserChoice)
);
function reloadGame() {
  window.location.reload();
}
resetBtn.addEventListener("click", reloadGame);
