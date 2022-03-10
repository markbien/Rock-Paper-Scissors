// Variables
// declare variable to get scores array
const scores = document.querySelectorAll('.scores'); 

// declare variables to hold scores
let playerScore = 0;
let computerScore = 0;

// get all buttons
const buttons = document.querySelectorAll('button');

// get status in the middle of the page
const play = document.querySelector('h2');

// declare variables to connect to scores at the top of the page
const p1 = scores[0];
const p2 = scores[1];

// get the main container
const main = document.querySelector('main');

// this is to be checked every time
let isThereAWinner = false;

// Event Listeners
buttons.forEach(button => button.addEventListener('click', selectChoice));
play.addEventListener('click', startOver);

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

// this is responsible for starting over the game
function startOver(){
    playerScore = 0;
    computerScore = 0;
    p1.textContent =playerScore;
    p2.textContent = computerScore;
    isThereAWinner = false;
    reset();
}

// responsible for checking who won the round
function playGame(playerInput, computerInput) {
    if (playerInput === "Rock" && computerInput === "Scissors") {
        updateScore(p1, ++playerScore);
        changeBackgroundColor('win');
    } else if (playerInput === "Rock" && computerInput === "Paper") {
        updateScore(p2, ++computerScore);
        changeBackgroundColor('lose');
    } else if (playerInput === "Paper" && computerInput === "Rock") {
        updateScore(p1, ++playerScore);
        changeBackgroundColor('win');
    } else if (playerInput === "Paper" && computerInput === "Scissors") {
        updateScore(p2, ++computerScore);
        changeBackgroundColor('lose');
    } else if (playerInput === "Scissors" && computerInput === "Paper") {
        updateScore(p1, ++playerScore);
        changeBackgroundColor('win');
    } else if (playerInput === "Scissors" && computerInput === "Rock") {
        updateScore(p2, ++computerScore);
        changeBackgroundColor('lose');
    } else {
        changeBackgroundColor('tie');
    }
}

// get player's choice
function selectChoice() {
    const choice = this.dataset['choice'];

    // animate buttons
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

// responsible for resetting the view
function reset() {
    if(isThereAWinner === false){
        this.textContent = 'Pick your choice!';
        buttons.forEach(button => {
            button.classList.remove('expand');
            button.classList.remove('hide');
        });
        main.style.backgroundColor = 'rgb(115, 115, 158)';
        play.textContent = 'Pick your choice!';
    }    
}

// update scores
function updateScore(player, score) {
    player.textContent = score;
    console.log("Score: ", player.textContent);
    checkWinner();
}

// changing background colors
function changeBackgroundColor(winner) {
    if (winner === 'win') {
        console.log('win');
        main.style.backgroundColor = 'Green';
        play.textContent = 'You won!';
    } else if (winner === 'lose') {
        console.log('lose');
        main.style.backgroundColor = 'Red';
        play.textContent = 'You lose!';
    } else if (winner === 'tie') {
        main.style.backgroundColor = 'Orange';
        play.textContent = 'Tie!';
        console.log('tie');
    }
}

// checks if there is a winner
function checkWinner() {
    let status = "";
    if (playerScore === 1) {
        isThereAWinner = true;
        status = 'win';
    }

    if (computerScore === 1) {
        isThereAWinner = true;
        status = 'lose';
    }

    if (isThereAWinner === true) {
        setTimeout(() => {
            play.textContent = `You ${status} the game! Click to restart.`;
            let color;
            if(status === 'win'){
                color = 'Green';
            } else {
                color = 'Red';
            }
            main.style.backgroundColor = color;
        }, 1000);
    }
}