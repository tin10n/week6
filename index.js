// ROCK PAPER SCISSORS GAME

/* This shows the array of choices that the player has.
The display elements show what is occuring.
The score display tracks the score */

const options = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerScore = 0;
let computerScore = 0;


function playGame(playerOption){

// Generates Computer Option and what the result is if a certain option is picked. //
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

// resets the results //
    resultDisplay.classList.remove("winText", "loseText", "tieText");


    playerDisplay.textContent = `PLAYER: ${playerOption}`;
    computerDisplay.textContent = `COMPUTER: ${computerOption}`;
    resultDisplay.textContent = result;


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
            break;  
    }
   
    // Add an event listener for the reset button
    document.getElementById("resetButton").addEventListener("click", resetGame);


    // Reset the score displays
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;

    // Clear the game result and choices
        resultDisplay.textContent = "";
        playerDisplay.textContent = "PLAYER: ";
        computerDisplay.textContent = "COMPUTER: ";
}
