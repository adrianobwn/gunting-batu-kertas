const choices = ["👊", "🖐️", "✌️"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
  document.getElementById("player-choice").textContent = humanChoice;
  document.getElementById("computer-choice").textContent = computerChoice;

  let outcome = "";
  if (humanChoice === computerChoice) {
    outcome = "Draw!";
  } else if (
    (humanChoice === "👊" && computerChoice === "✌️") ||
    (humanChoice === "🖐️" && computerChoice === "👊") ||
    (humanChoice === "✌️" && computerChoice === "🖐️")
  ) {
    humanScore++;
    outcome = "You win this round!";
  } else {
    computerScore++;
    outcome = "The computer wins this round!";
  }

  document.getElementById("outcome").textContent = outcome;
  document.getElementById("score_kamu").textContent = humanScore;
  document.getElementById("score_komputer").textContent = computerScore;

  // Cek apakah ada pemenang
  if (humanScore === 5 || computerScore === 5) {
    const winner = humanScore === 5 ? "You" : "Computer";
    alert(`${winner} win the game!`);
    resetGame();
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  document.getElementById("player-choice").textContent = "";
  document.getElementById("computer-choice").textContent = "";
  document.getElementById("outcome").textContent = "";
  document.getElementById("score").textContent = "Score: You 0 - Computer 0";
}

document.querySelectorAll(".button").forEach(button => {
  button.addEventListener("click", () => {
    const humanChoice = button.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});
