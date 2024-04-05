let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losess: 0,
  ties: 0,
};

updatingScore();

if (!score) {
  score = {
    wins: 0,
    losess: 0,
    ties: 0,
  };
}

function playGame(playerMove) {
  const computeMove = pickComputerMove();

  let result = "";
  if (playerMove === "scissors") {
    if (ComputeMove === "rock") {
      result = "lose";
    } else if (ComputeMove === "paper") {
      result = "you win";
    } else if (ComputeMove === "scissors") {
      result = "tie";
    }
  } else if (playerMove === "paper") {
    if (ComputeMove === "rock") {
      result = "you win";
    } else if (ComputeMove === "paper") {
      result = "you tie";
    } else if (ComputeMove === "scissor") {
      result = "lose";
    }
  } else if (playerMove === "rock") {
    if (ComputeMove === "rock") {
      result = "tie";
    } else if (ComputeMove === "paper") {
      result = "you lose";
    } else if (ComputeMove === "scissor") {
      result = "you win";
    }
  }

  if (result === "you win") {
    score.wins += 1;
  }
  if (result === "you lose") {
    score.losess += 1;
  }
  if (result === "tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updatingScore();

  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-moves").innerHTML = `You
      <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/121/872/original/rock-emoji.png?1712269917 ${playerMove}" class="move-icon"  />
      <img src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/121/873/original/scissors-emoji.png?1712269937"
        alt="scissors ${ComputeMove}" class="move-icon"  />
      Computer`;
}

function updatingScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `wins: ${score.wins}, losses: ${score.losess}, ties: ${score.ties} `;
}

let ComputeMove = "";

function pickComputerMove() {
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    ComputeMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    ComputeMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    ComputeMove = "scissors";
  }
  return "computeMove";
}
