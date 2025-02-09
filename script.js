let humanSelection, computerSelection;
humanSelection = document.querySelector(".player");
computerSelection = document.querySelector(".computer");
const choices = ["./img/pedra.png", "./img/tesouras.png", "./img/papel.png"]

function getComputerChoice() {

    let choice = Math.floor(Math.random() * 3);

    switch (choice) {

        case 0:
            computerSelection.src = choices[0];
            return "rock";

        case 1: 
            computerSelection.src = choices[1];
            return "scissors";

        case 2:
            computerSelection.src = choices[2];
            return "paper";    
}

}


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.value, getComputerChoice())
        console.log(button.value);
    })
})



let humanScore = 0;
let computerScore = 0;
const humanPointsElement = document.querySelector("#playerPoints");
const computerPointsElement = document.querySelector("#computerPoints");

const result = document.querySelector("#result");

function updatePoints() {
    humanPointsElement.textContent = humanScore;
    computerPointsElement.textContent = computerScore;
}

    function playRound(humanChoice, computerChoice) {
        //    SE escolhaHumana igual a escolha computador FAÇA
            


            switch(humanChoice) {
                case "rock":
                    humanSelection.src = choices[0];
                    break;
                
                case "scissors":
                    humanSelection.src = choices[1];
                    break;

                case "paper":
                    humanSelection.src = choices[2];
                    break;
            }
        


            if (humanChoice === computerChoice) {
                result.textContent = "Draw in this round";
            }
            else if(humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "scissors") {
                humanScore++;
                updatePoints();
                result.textContent = "You Win this round!";
            }
            else {
                computerScore++;
                updatePoints();
                result.textContent = "Computer wins this round!";
            } 

            if (humanScore == 5 || computerScore == 5) {
                checkgame(humanScore, computerScore);
                for (button of buttons) {
                    button.disabled = true;
                }
            }    
        }



function checkgame(human, computer) {
    if (human == 5) {
        result.textContent = "Player won the game! Reload the page to play again";

    }
    else if (computer == 5) {
        result.textContent = "Computer won the game! Reload the page to play again";
    }
}

 