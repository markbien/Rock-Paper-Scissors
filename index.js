// Variables

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
        return "You win! Rock beats Scissors";
    } else if(playerInput === "Rock" && computerInput === "Paper"){
        return "You lose! Paper beats Rock";
    }  else if(playerInput === "Paper" && computerInput === "Rock"){
        return "You win! Paper beats Rock";
    } else if(playerInput === "Paper" && computerInput === "Scissors"){
        return "You lose! Scissors beats Paper";
    } else if(playerInput === "Scissors" && computerInput === "Paper"){
        return "You win! Scissors beats Paper";
    } else if(playerInput === "Scissors" && computerInput === "Rock"){
        return "You lose! Rock beats Scissors";
    } else {
        return "Tie!";
    }
}

// Call Function
// computerPlay();
console.log(playGame("Scissors", computerPlay()));