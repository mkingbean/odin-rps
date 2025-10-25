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
    return humanChoice;
    }

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        console.log(`You chose ${humanChoice} and the computer chose ${computerChoice}.`);

        if (humanChoice === computerChoice) {
            console.log("No-one wins any points!");
        } else if (humanChoice === "rock" && computerChoice === "scissors"
            || humanChoice === "paper" && computerChoice === "rock"
            || humanChoice === "scissors" && computerChoice === "paper") {
                console.log("You win one point!");
                humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "paper"
            || humanChoice === "paper" && computerChoice === "scissors"
            || humanChoice === "scissors" && computerChoice === "rock") {
                console.log("The computer wins one point!");
                computerScore++;
        } else {
            console.log(`"${humanChoice}" is not a valid choice.`);
            return
        }

        console.log(`You have ${humanScore} points and the computer has ${computerScore} points.`);
        return;
    }

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    switch (true) {
        case humanScore > computerScore:
            console.log("Congratulations, you've one!");
            return;
        case humanScore < computerScore:
            console.log("Bad luck, you've lost!");
            return;
        case humanScore === computerScore:
            console.log("It's a draw!");
    }
}

playGame();