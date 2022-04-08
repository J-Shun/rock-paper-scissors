function computerPlay() {
    const choices = ['ROCK', 'PAPER', "SCISSORS"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playerPlay() {
    let playerChoice = prompt(`Please enter "ROCK", "PAPER", or "SCISSORS"`);
    while (playerChoice.toUpperCase() != "ROCK" && playerChoice.toUpperCase() != "PAPER" && playerChoice.toUpperCase() != "SCISSORS") {
        playerChoice = prompt(`Invalid Enter! Please enter "ROCK", "PAPER", or "SCISSORS"`);
    }
    return playerChoice.toUpperCase();
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "ROCK" && computerSelection === "SCISSORS") 
    || (playerSelection === "PAPER" && computerSelection === "ROCK") 
    || (playerSelection === "SCISSORS" && computerSelection === "PAPER")) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else if ((playerSelection === "ROCK" && computerSelection === "PAPER") 
    || (playerSelection === "PAPER" && computerSelection === "SCISSORS") 
    || (playerSelection === "SCISSORS" && computerSelection === "ROCK")) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    } else {
        return `It's a draw!`;
    }
}

console.log(playRound(playerPlay(), computerPlay()));