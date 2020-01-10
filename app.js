playGame();
  
  function playGame() {

    "use strict";
    let playerScore = 0;
    let computerScore = 0;

    function playRound() {

      const choices = ["rock", "paper", "scissors"];
      const playerSelection = playerPlay();
      const computerSelection = computerPlay();

      function playerPlay() {
        let playerWeapon = "";
        while (true) {
          if (!playerWeapon) {
            playerWeapon = prompt("Let's play \"Rock, Paper, Scissors\"!\nWhat is your choice of weapon—rock, paper, or scissors?", "").toLowerCase();
          } else if (!choices.includes(playerWeapon)) {
            alert("That is not a valid weapon choice!");
            playerWeapon = prompt("Try again. What is your choice of weapon—rock, paper, or scissors?", "").toLowerCase();
          } else break;
        }
        console.log(`Player chooses ${playerWeapon}.`);
        return playerWeapon;
      }

      function computerPlay() {
        let computerWeapon = choices[Math.floor(Math.random() * (3))];
        console.log(`Computer chooses ${computerWeapon}.`);
        return computerWeapon;
      }

      let result;
      if (playerSelection === computerSelection) {
        result = "Tie!";
      } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore += 1;
        result = "You lost the round: paper covers rock!";
      } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore += 1;
        result = "You won the round: rock smashes scissors!";
      } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore += 1;
        result = "You won the round: paper covers rock!";
      } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore += 1;
        result = "You lost the round: scissors make confetti out of paper!";
      } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore += 1;
        result = "You lost the round: rock smashes scissors!";
      } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore += 1;
        result = "You won the round: scissors make confetti out of paper!";
      }

      let message = `${result}\nPlayer: ${playerScore}\nComputer: ${computerScore}`;
      console.log(message);
      return message;

    }

    for (let rounds = 0; rounds < 5; rounds++) playRound();

    function announceWinner() {
      if (playerScore > computerScore) {
        return "You won the game!";
      } else if (playerScore < computerScore) {
        return "You lost the game!";
      } else {
        return "Call it a draw!";
      }
    }

    console.log(announceWinner());
    announceWinner();

  }