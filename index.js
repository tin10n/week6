// ROCK PAPER SCISSORS GAME COQUETTE VERSION //

// This shows the array of choices that the player has. The display elements show what is occuring. The score display tracks the score of both the player and computer. //

const options = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;


function playGame(playerOption){

// Generates computer option and what the result is if a certain option is picked. Number 3 is used because there are 3 options to choose from. //
    const computerOption = options[Math.floor(Math.random() * 3)]
    console.log(computerOption);
    let result = "";


    if(playerOption === computerOption){
        result = "IT'S A TIE!";
    }


    else{
        switch(playerOption){
            case "rock":
                result = (computerOption === "scissors") ? "YOU WIN!" : "YOU LOSE!"
                break
           
            case "paper":
                result = (computerOption === "rock") ? "YOU WIN!" : "YOU LOSE!"
                break
               
            case "scissors":
                result = (computerOption === "paper") ? "YOU WIN!" : "YOU LOSE!"
                break
        }
    }

// Resets the results, that way the text colors are consistent. //
    resultDisplay.classList.remove("winText", "loseText", "tieText");


    playerDisplay.textContent = `PLAYER: ${playerOption}`;
    computerDisplay.textContent = `COMPUTER: ${computerOption}`;
    resultDisplay.textContent = result;

    // Text color changes depending on your results. //
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("winText")
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;

        case "YOU LOSE!":
            resultDisplay.classList.add("loseText")
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
       
        case "IT'S A TIE!":
            resultDisplay.classList.add("tieText")
            tieScore++;
            tieScoreDisplay.textContent = tieScore;
            break;  
    }
   
    // Adding an event listener for the Reset button, on click command. //
    document.getElementById("resetButton").addEventListener("click", resetGame);
    
    function resetGame(){
    // Reset the score displays by having the score displays change to 0. //
        document.getElementById("playerScoreDisplay").innerHTML= 0;
        document.getElementById("computerScoreDisplay").innerHTML = 0;
        document.getElementById("tieScoreDisplay").innerHTML = 0;
}

}