function playGame() {

    function playRound(event) {

        function displayChoices() {
            roundChoices.innerText = `You chose ${humanChoice} and the computer chose ${computerChoice}.`;
        }

        function calculateRoundWinner() {
            const isHumanWin = humanChoice === "rock" && computerChoice === "scissors"
                || humanChoice === "paper" && computerChoice === "rock"
                || humanChoice === "scissors" && computerChoice === "paper";

            const isComputerWin = humanChoice === "rock" && computerChoice === "paper"
                || humanChoice === "paper" && computerChoice === "scissors"
                || humanChoice === "scissors" && computerChoice === "rock";

            if (humanChoice === computerChoice) {
            roundWinner.innerText = "No-one wins any points!";
            } else if (isHumanWin) {
                roundWinner.innerText = "You win one point!";
                humanScore++;
            } else if (isComputerWin) {
                roundWinner.innerText = "The computer wins one point!";
                computerScore++;
            } else {
                roundWinner.innerText = `"${humanChoice}" is not a valid choice.`;
            }
        }

        function updateScorecard() {
            scorecard.innerText = `You have ${humanScore} points and the computer has ${computerScore} points.`;
        }

        function displayResult(message) {
            // A delay of 50ms ensures that the page is repainted before the alert, which pauses the execution
            setTimeout(() => {
                window.alert(message);
                humanScore = 0;
                computerScore = 0;
                roundChoices.innerText = "";
                roundWinner.innerText = "";
                scorecard.innerText = "";
            }, 50);
        }

        function calculateOverallWinner() {
            switch (true) {
                case humanScore > computerScore:
                    displayResult("Congratulations, you've won the game!");
                    return;
                case humanScore < computerScore:
                    displayResult("Bad luck, you've lost the game!");
                    return;
                case humanScore === computerScore:
                    displayResult("It's a draw!");
            }
        }

        function checkForWinner() {
            if (humanScore === 5 || computerScore === 5) calculateOverallWinner();
        }

        function getHumanChoice() {
            return event.target.getAttribute("id");
        }

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

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        displayChoices();
        calculateRoundWinner();
        updateScorecard();
        checkForWinner();

    }

    let humanScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll("button");
    const roundChoices = document.querySelector("#choices");
    const roundWinner = document.querySelector("#round-winner")
    const scorecard = document.querySelector("#scorecard");

    for (const button of buttons) {
        button.addEventListener("click", playRound);
    }
}

playGame();