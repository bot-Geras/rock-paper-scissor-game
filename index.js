const computerDisplay = document.getElementById("computer-results");
const userDisplay = document.getElementById("user-results");
const resultDisplay = document.getElementById("result");
const possibleChoice = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let results;

possibleChoice.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResults();
  })
);

function generateComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber);
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
    results = "User Won";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    results = "Computer Won";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    results = "User Won";
  }
  if (computerChoice === "paper" && userChoice === "Rock") {
    results = "Computer Won";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    results = "User Won";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    results = "computer Won";
  }
  resultDisplay.innerHTML = results;
}
