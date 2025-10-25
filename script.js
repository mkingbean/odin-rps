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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
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

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    switch (true) {
        case humanScore > computerScore:
            console.log("You win the whole game!");
            return;
        case humanScore < computerScore:
            console.log("You lose the whole game");
            return;
        case humanScore === computerScore:
            console.log("The whole game is a draw!");
    }
}