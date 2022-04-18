// function computerPlay() {
//     const choices = ['ROCK', 'PAPER', "SCISSORS"];
//     const random = Math.floor(Math.random() * choices.length);
//     return choices[random];
// }

// function playerPlay() {
//     let playerChoice = prompt(`Please enter "ROCK", "PAPER", or "SCISSORS"`);
//     while (playerChoice.toUpperCase() != "ROCK" && playerChoice.toUpperCase() != "PAPER" && playerChoice.toUpperCase() != "SCISSORS") {
//         playerChoice = prompt(`Invalid Enter! Please enter "ROCK", "PAPER", or "SCISSORS"`);
//     }
//     return playerChoice.toUpperCase();
// }

// function playRound(playerSelection, computerSelection) {
//     if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") 
//     || (playerSelection === "PAPER" && computerSelection === "ROCK") 
//     || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
//         console.log(`You win! ${playerSelection} beats ${computerSelection}`);
//         return 1;
//     } else if ((playerSelection === "ROCK" && computerSelection === "PAPER") 
//     || (playerSelection === "PAPER" && computerSelection === "SCISSORS") 
//     || (playerSelection === "SCISSORS" && computerSelection === "ROCK")) {
//         console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
//         return -1;
//     } else {
//         console.log(`It's a draw!`);
//         return 0;
//     }
// }

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     let result = 0;

//     for (let i = 0; i < 5; i++) {
//         result = playRound(playerPlay(), computerPlay());
//         if (result === 1) {
//             playerScore++;
//         } else if (result === -1) {
//             computerScore++;
//         }
//         console.log(`Now you got ${playerScore}, and computer got ${computerScore}`);
//     }

//     if (playerScore > computerScore) {
//         console.log(`Game set! You win the game!`);
//     } else if (playerScore < computerScore) {
//         console.log(`Game set! You lose the game`);
//     } else {
//         console.log(`Game set! No one wins`);
//     }
// }

// game();

// for counting score
const userScore = document.querySelector('.user-score');
const computerScore = document.querySelector('.computer-score');
let userTotalScore = 0;
let computerTotalScore = 0;

// for update the display
const userChoiceDisplay = document.querySelector('.user-img-container');
const computerChoiceDisplay = document.querySelector('.computer-img-container');


const select = document.querySelectorAll('.card');

select.forEach(choice =>  {
    choice.addEventListener('click', (e) => {
        let userChoice = e.target.id;
        computerChoice = computerPlay()
        gameStart(userChoice, computerChoice);
        updateChoice(userChoice, computerChoice);
        updateScore();
        console.log(userTotalScore, computerTotalScore);
    })
}) 

function computerPlay() {
    const choices = ['rock', 'paper', "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function gameStart(userPlay, computerPlay) {
    if ((userPlay === "rock" && computerPlay === "scissors") 
    || (userPlay === "paper" && computerPlay === "rock") 
    || (userPlay === "scissors" && computerPlay === "paper")) {
        userTotalScore++;
        return;
    } else if ((userPlay === "rock" && computerPlay === "paper") 
    || (userPlay === "paper" && computerPlay === "scissors") 
    || (userPlay === "scissors" && computerPlay === "rock")) {
        computerTotalScore++;
        return;
    } else {
        return;
    }
}

function updateScore() {
    userScore.textContent =  userTotalScore;
    computerScore.textContent = computerTotalScore;
}

function updateChoice(userChoiceImage, computerChoiceImage) {
    const rockImage = '<img src="./image/rock.jpg" alt="rock" id="rock">';
    const paperImage = '<img src="./image/paper.jpg" alt="rock" id="paper">';
    const scissorsImage = '<img src="./image/scissors.jpg" alt="rock" id="scissors">';
    switch (userChoiceImage) {
        case 'rock':
            userChoiceDisplay.innerHTML = rockImage;
            break;
        case 'paper':
            userChoiceDisplay.innerHTML = paperImage;
            break;
        case 'scissors':
            userChoiceDisplay.innerHTML = scissorsImage;
            break;
    }
    switch (computerChoiceImage) {
        case 'rock':
            computerChoiceDisplay.innerHTML = rockImage;
            break;
        case 'paper':
            computerChoiceDisplay.innerHTML = paperImage;
            break;
        case 'scissors':
            computerChoiceDisplay.innerHTML = scissorsImage;
            break;
    }
}