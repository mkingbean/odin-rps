console.log("Hello, world.");

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    switch (randomInt) {
        case 0:
            return "rock";
            break
        case 1:
            return "paper";
            break
        case 2:
            return "scissors";
            break
    }
}

function getHumanChoice() {
    let humanChoice = window.prompt("Rock, Paper, or Scissors?").toLowerCase();
    switch (humanChoice) {
        case "rock":
        case "paper":
        case "scissors":
            return humanChoice;
            break
    }
}

let humanScore = 0;
let computerScore = 0;