"use strict";

const paperBtn = document.getElementById("paperBtn icon");
const scissorsBtn = document.getElementById("scissorsBtn icon");
const rockBtn = document.getElementById("rockBtn icon");
const resetBtn = document.querySelector(".reset");
const userCounter = document.querySelector(".user-counter");
const pcCounter = document.querySelector(".pc-counter");
const textBox = document.getElementById("textBox");

let userScore = 0;
let pcScore = 0;
let userPlay;
let pcPlay;
let playing = true;

const init = function () {
  userScore = 0;
  pcScore = 0;
  playing = true;
  userCounter.textContent = userScore;
  pcCounter.textContent = pcScore;
};

let game = function (userChoice) {
  userPlay = userChoice;
  return userPlay;
};

let computerPlay = function () {
  const choices = ["rock", "paper", "scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  pcPlay = choices[randomNumber];
  return pcPlay;
};

let userWin = function () {
  ++userScore;
  userCounter.textContent = userScore;
  textBox.textContent = `PC played ${pcPlay}, you win! 🎉`;
  console.log("you win!");
};

let draw = function () {
  textBox.textContent = `PC played ${pcPlay}, you draw!`;
  console.log("draw!");
};

let userLose = function () {
  ++pcScore;
  pcCounter.textContent = pcScore;
  textBox.textContent = `PC played ${pcPlay}, you lose! 😢`;
  console.log("you lose!");
};

let playRound = function () {
  if (playing) {
    console.log(userPlay, pcPlay);
    switch (userPlay + pcPlay) {
      case "paperrock":
      case "scissorspaper":
      case "rockscissors":
        userWin();
        break;
      case "paperscissors":
      case "scissorsrock":
      case "rockpaper":
        userLose();
        break;
      case "paperpaper":
      case "scissorsscissors":
      case "rockrock":
        draw();
        break;
    }

    if (userScore == 5) {
      playing = false;
      textBox.textContent = `First to 5, you win!`;
    } else if (pcScore == 5) {
      playing = false;
      textBox.textContent = `PC was first to 5, you lose!`;
    }
  }
};

let clickPaper = paperBtn.addEventListener("click", function () {
  game("paper");
  computerPlay();
  playRound();
});

let clickScissors = scissorsBtn.addEventListener("click", function () {
  game("scissors");
  computerPlay();
  playRound();
});

let clickRock = rockBtn.addEventListener("click", function () {
  game("rock");
  computerPlay();
  playRound();
});

let clickReset = resetBtn.addEventListener("click", function () {
  init();
});
