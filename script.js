function getComputerChoice() {
  const choices = ["batu", "kertas", "gunting"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getHumanChoice() {
  return prompt("Pilih: batu, kertas, atau gunting").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Seri!");
  } else if (
    (humanChoice === "batu" && computerChoice === "gunting") ||
    (humanChoice === "kertas" && computerChoice === "batu") ||
    (humanChoice === "gunting" && computerChoice === "kertas")
  ) {
    console.log(`Menang! ${humanChoice} mengalahkan ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`Kalah! ${computerChoice} mengalahkan ${humanChoice}`);
    computerScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  console.log(`Skor Akhir: Kamu ${humanScore}, Komputer ${computerScore}`);
}

playGame();