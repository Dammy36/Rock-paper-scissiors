let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losess: 0,
  ties: 0,
};

updatingScore();

/*if (!score) {
  score = {
    wins: 0,
    losess: 0,
    ties: 0,
  };
}*/

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function () {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

function playGame(playerMove) {
  const computeMove = pickComputerMove();

  let result = "";
  if (playerMove === "scissors") {
    if (computeMoveomputeMove === "rock") {
      result = "lose";
    } else if (computeMoveomputeMove === "paper") {
      result = "you win";
    } else if (computeMoveomputeMove === "scissors") {
      result = "tie";
    }
  } else if (playerMove === "paper") {
    if (computeMove === "rock") {
      result = "you win";
    } else if (computeMove === "paper") {
      result = "you tie";
    } else if (computeMove === "scissor") {
      result = "lose";
    }
  } else if (playerMove === "rock") {
    if (computeMove === "rock") {
      result = "tie";
    } else if (computeMove === "paper") {
      result = "you lose";
    } else if (computeMove === "scissor") {
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
        alt="scissors ${computeMove}" class="move-icon"  />
      Computer`;
}

function updatingScore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `wins: ${score.wins}, losses: ${score.losess}, ties: ${score.ties} `;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let ComputeMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    ComputeMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    ComputeMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    ComputeMove = "scissors";
  }
  return ComputeMove;
}
