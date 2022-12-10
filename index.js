const computerDisplay = document.getElementById("computer-results");
const userDisplay = document.getElementById("user-results");
const resultDisplay = document.getElementById("result");
const possibleChoice = document.querySelectorAll("button");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
let userChoice;
let computerChoice;
let score = 0;

possibleChoice.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userDisplay.textContent = userChoice;
    generateComputerChoice();
    getResults();
  })
);

function generateComputerChoice() {
  let randomNumber = Math.floor(Math.random() * possibleChoice.length);

  if (randomNumber === 0) {
    computerChoice = "rock";
  }
  if (randomNumber === 1) {
    computerChoice = "scissors";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  computerDisplay.textContent = computerChoice;
}
function getResults() {
  switch (computerChoice + userChoice) {
    case "scissorspaper":
    case "rockscissors":
    case "paperrock":
      resultDisplay.textContent = "You Lost";
      computer.textContent = ++score;
      break;
    case "paperscissors":
    case "scissorsrock":
    case "rockpaper":
      resultDisplay.textContent = "You Win";
      player.textContent = ++score;
      break;
    case "paperpaper":
    case "scissorsscissors":
    case "rockrock":
      resultDisplay.textContent = "Its a draw";
      break;
  }
}

