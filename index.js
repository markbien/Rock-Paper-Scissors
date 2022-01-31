// Variables
let playerScore = 0;
let computerScore = 0;

// Event Listeners

// Functions
function computerPlay() {
    // Generate number from 0 to 2 and remove floating digits
    let num = Math.floor(Math.random() * 3);

    // to print rock, paper or scissors
    switch (num) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return 0;
    }
}

function capitalizeFirstLetter(input){
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
}

function playGame(playerInput, computerInput){
    if(playerInput === "Rock" && computerInput === "Scissors"){
        playerScore++;
        return "You win! Rock beats Scissors";
    } else if(playerInput === "Rock" && computerInput === "Paper"){
        computerScore++;
        return "You lose! Paper beats Rock";
    }  else if(playerInput === "Paper" && computerInput === "Rock"){
        playerScore++;
        return "You win! Paper beats Rock";
    } else if(playerInput === "Paper" && computerInput === "Scissors"){
        computerScore++;
        return "You lose! Scissors beats Paper";
    } else if(playerInput === "Scissors" && computerInput === "Paper"){
        playerScore++;
        return "You win! Scissors beats Paper";
    } else if(playerInput === "Scissors" && computerInput === "Rock"){
        computerScore++;
        return "You lose! Rock beats Scissors";
    } else {
        return "Tie!";
    }
}

function game(){
    playerInput = ["Rock", "Rock", "Scissors", "Rock", "Paper"];
    for(i = 0; i < 5; i++){
        console.log(playGame(playerInput[i], computerPlay()));
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);
    }

    if(playerScore > computerScore){
        console.log("Player wins!");
    } else if(playerScore < computerScore) {
        console.log("Computer wins!");
    } else {
        console.log("Tie game!");
    }
}

// Call Function
game();