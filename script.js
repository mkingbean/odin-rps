console.log("Hello, world.");

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    switch (randomInt) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = window.prompt("Rock, Paper, or Scissors?").toLowerCase();
    switch (humanChoice) {
        case "rock":
        case "paper":
        case "scissors":
            return humanChoice;
    }
}

let humanScore = 0;
let computerScore = 0;

//playRound
// Save the human choice to a variable
// Save the computer choice to a variable
// IF human choice = computer choice log "draw"
// IF human wins THEN increment human score and log message
// IF computer wins THEN increment computer score and log message

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        window.console.log("It's a draw!");
        return;
    } else if (humanChoice === "rock" && computerChoice === "scissors"
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper") {
            window.console.log("You win!");
            humanScore += 1;
            return;
    } else if (humanChoice === "rock" && computerChoice === "paper"
        || humanChoice === "paper" && computerChoice === "scissors"
        || humanChoice === "scissors" && computerChoice === "rock") {
            window.console.log("You lose!");
            computerScore += 1;
            return;
    } else {
        console.log("Invalid choice");
        return;
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);