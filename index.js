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

function getUserChoice(e) {
  userChoice = e.target.id;
  userDisplay.innerHTML = userChoice;

  generateComputerChoice();
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
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    results = "You lost";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    results = "You win";
  }
  if (computerChoice === "paper" && userChoice === "Rock") {
    results = "You lost";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    results = "You Won";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    results = "you lost";
  }
  resultDisplay.innerHTML = results;
}

possibleChoice.forEach((choice) =>
  choice.addEventListener("click", getUserChoice)
);
