function computerPlay() {
    const choices = ['ROCK', 'PAPER', "SCISSORS"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playerSelection() {
    let playerChoice = prompt(`Please enter "ROCK", "PAPER", or "SCISSORS"`);
    while (playerChoice.toUpperCase() != "ROCK" && playerChoice.toUpperCase() != "PAPER" && playerChoice.toUpperCase() != "SCISSORS") {
        playerChoice = prompt(`Invalid Enter! Please enter "ROCK", "PAPER", or "SCISSORS"`);
    }
    return playerChoice.toUpperCase();
}

