
function getComputerChoice() {
  let compChoice = null;
  let seed = Math.floor(Math.random() * 3);
  if (seed === 0) {
    compChoice = "rock";
  }
    else if (seed === 1) {
    compChoice = "paper";
  }
  else {
    compChoice = "scissors";
  }
  return compChoice;
}

function getPlayerChoice() {
  let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
  if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
    return playerChoice;
  }
  else {
    alert("Invalid choice.");
    return getPlayerChoice();
  }
}

function determineWinner(computerChoice, playerChoice) {
  let winner;
  if (computerChoice === "rock") {
    if (playerChoice === "rock") {
      winner = "tie";
    }
    else if (playerChoice === "paper") {
      winner = "player";
    }
    else {
      winner = "computer";
    }
  }
  else if (computerChoice === "paper") {
    if (playerChoice === "rock") {
      winner = "computer";
    }
    else if (playerChoice === "paper") {
      winner = "tie";
    }
    else {
      winner = "player";
    }
  }
  else {
    if (playerChoice === "rock") {
      winner = "player";
    }
    else if (playerChoice === "paper") {
      winner = "computer";
    }
    else {
      winner = "tie";
    }
  }
  return winner;
}

function playRound(pChoice) {
  let cChoice = getComputerChoice();
  let winner = determineWinner(cChoice, pChoice);
  let winDeclaration = "No winner has been determined";
  if (winner === "player") {
    winDeclaration = `You win! ${pChoice} beats ${cChoice}`;
  }
  else if (winner === "computer") {
    winDeclaration = `You lose! ${cChoice} beats ${pChoice}`;
  }
  else {
    winDeclaration = `It's a tie between ${pChoice} and ${pChoice}`;
  }
  const displayDiv = document.querySelector("div");
  displayDiv.textContent = winDeclaration;
  return winDeclaration;
}

let pScore = 0;
let cScore = 0;

function game(e) {
  winDeclare = playRound(e.target.textContent.toLowerCase());
  if (winDeclare.includes("win")) {
    pScore++;
    const playerScore = document.querySelector("#player");
    playerScore.textContent = `Player Score: ${pScore}`;
  }
  else if (winDeclare.includes("lose")) {
    cScore++;
    const compScore = document.querySelector("#computer");
    compScore.textContent = `Computer Score: ${cScore}`;
  }
  if (pScore === 5 || cScore === 5) {
    if (pScore > cScore) {
      const displayDiv = document.querySelector("div");
      displayDiv.textContent = "You win!";
    }
    else {
      const displayDiv = document.querySelector("div");
      displayDiv.textContent = "You lose!";
    }
  }
}


const buttonRock = document.querySelector("#rock");
const buttonPaper = document.querySelector("#paper");
const buttonScissors = document.querySelector("#scissors");
let winText;
buttonRock.addEventListener("click", (e) => {game(e)});
buttonPaper.addEventListener("click", (e) => {game(e)});
buttonScissors.addEventListener("click", (e) => {game(e)});
