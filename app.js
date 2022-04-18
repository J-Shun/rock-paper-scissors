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

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const select = document.querySelectorAll('.card');
let userChoice = '';

select.forEach(choice =>  {
    choice.addEventListener('click', (e) => {
        userChoice = e.target.id;
        computerChoice = computerPlay()
        gameStart(userChoice, computerChoice);
    })
}) 

function gameStart(userPlay, computerPlay) {
    console.log(userPlay);
    console.log(computerPlay);
    if ((userPlay === "rock" && computerPlay === "scissors") 
    || (userPlay === "paper" && computerPlay === "rock") 
    || (userPlay === "scissors" && computerPlay === "paper")) {
        console.log(`You win! ${userPlay} beats ${computerPlay}`);
        return 1;
    } else if ((userPlay === "rock" && computerPlay === "paper") 
    || (userPlay === "paper" && computerPlay === "scissors") 
    || (userPlay === "scissors" && computerPlay === "rock")) {
        console.log(`You lose! ${computerPlay} beats ${userPlay}`);
        return -1;
    } else {
        console.log(`It's a draw!`);
        return 0;
    }
}


function computerPlay() {
    const choices = ['rock', 'paper', "scissors"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

