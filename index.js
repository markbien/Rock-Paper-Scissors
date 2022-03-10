// Variables
const scores = document.querySelectorAll('.scores');
let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const titleRound = document.querySelector('h1');
const play = document.querySelector('h2');
const p1 = scores[0];
const p2 = scores[1];

// Event Listeners
buttons.forEach(button => button.addEventListener('click', selectChoice));
play.addEventListener('click', reset);

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

// function capitalizeFirstLetter(input) {
//     return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
// }

function playGame(playerInput, computerInput) {
    console.log(playerInput);
    console.log(computerInput);
    if (playerInput === "Rock" && computerInput === "Scissors") {
        // playerScore++;
        updateScore(p1, ++playerScore);
        // return "You win! Rock beats Scissors";
    } else if (playerInput === "Rock" && computerInput === "Paper") {
        updateScore(p2, ++computerScore);
        // computerScore++;
        // return "You lose! Paper beats Rock";
    } else if (playerInput === "Paper" && computerInput === "Rock") {
        updateScore(p1, ++playerScore);
        // playerScore++;
        // return "You win! Paper beats Rock";
    } else if (playerInput === "Paper" && computerInput === "Scissors") {
        updateScore(p2, ++computerScore);
        // computerScore++;
        // return "You lose! Scissors beats Paper";
    } else if (playerInput === "Scissors" && computerInput === "Paper") {
        updateScore(p1, ++playerScore);
        // playerScore++;
        // return "You win! Scissors beats Paper";
    } else if (playerInput === "Scissors" && computerInput === "Rock") {
        updateScore(p2, ++computerScore);
        // computerScore++;
        // return "You lose! Rock beats Scissors";
    }
    // } else {
    //     return "Tie!";
    // }
}

function selectChoice() {
    const choice = this.dataset['choice'];

    buttons.forEach(button => {
        if (button == this) {
            button.classList.add('expand');
        } else {
            button.classList.add('hide');
        }
    });

    // battles the computer
    playGame(choice, computerPlay());


    // resets choices after 3 seconds
    setTimeout(reset, 3000);
}

function reset() {
    this.textContent = 'Pick your choice!';
    buttons.forEach(button => {
        button.classList.remove('expand');
        button.classList.remove('hide');
    });
}

// update scores
function updateScore(player, score) {
    player.textContent = score;
    console.dir(player.textContent);
}

// test score update
// updateScore(scores[0], playerScore + 1);
// updateScore(scores[1], computerScore + 2);