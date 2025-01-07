// FUNÇÃO pegarvalordocomputador COMEÇO
function getComputerChoice() {
// Faça o cálculo da escolha do computador entre 3 opções arredonde o número e armazene na variável computerChoice.
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {

        case 0:
            return "rock";

        case 1: 
            return "scissors";

        case 2:
            return "paper";    
}

}

//FUNÇÃO pegarvalordousuário COMEÇO
function getHumanChoice(round) {
    //ENQUANTO valordousuário for diferente a pedra ou papel ou tesoura FAÇA
    let choice;
    
    do {
        choice = prompt("Choose between rock, paper or scissors. \nround: " + round );
        if (choice === null) {
            choice = prompt("Choose between rock, paper or scissors.  \nround: " + round + " \nError: Your answer was NULL.");    
        }
        else {
           return choice.toLowerCase();
        }
    } while (!(choice === "paper" || choice === "scissors" || choice === "rock" ) || choice === null)
    
    return choice;
}




let humanSelection, computerSelection;



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        //    SE escolhaHumana igual a escolha computador FAÇA
            alert(`You choose ${humanChoice} \ncomputer choose ${computerChoice}`);
        
            if (humanChoice === computerChoice) {
                alert("Draw in this round");
            }
            else if(humanChoice === "scissors" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "scissors") {
                humanScore++;
                alert("You Win this round!");
            }
            else {
                computerScore++;
                alert("Computer wins this round!");
            } 
        }
        
    for (let i = 1; i <= 5; i++) {
        humanSelection = getHumanChoice(i);
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore === computerScore) {
        alert("Draw!");
    }
    if (humanScore > computerScore) {
        alert("You win!");
    }
    if (humanScore < computerScore) {
        alert("Computer wins!");
    }
}

playGame();
 