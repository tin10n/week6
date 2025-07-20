// ROCK PAPER SCISSORS GAME


const options = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")
let playerScore = 0;
let computerScore = 0;


function playGame(playerOption){


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


    resultDisplay.classList.remove("greenText", "redText", "blackText");


    playerDisplay.textContent = `PLAYER: ${playerOption}`;
    computerDisplay.textContent = `COMPUTER: ${computerOption}`;
    resultDisplay.textContent = result;


    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText")
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
           


        case "YOU LOSE!":
            resultDisplay.classList.add("redText")
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
       
        case "IT'S A TIE!":
            resultDisplay.classList.add("blackText")
            break;  
    }
   
}
