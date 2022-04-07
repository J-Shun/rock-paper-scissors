function computerPlay() {
    const choices = ['ROCK', 'PAPER', "SCISSORS"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}

function playerSelection() {
    let playerChoice = prompt(`Please enter "ROCK", "PAPER", or "SCISSORS"`);
    while (playerChoice != "ROCK" && playerChoice != "PAPER" && playerChoice != "SCISSORS") {
        playerChoice = prompt(`Invalid Enter! Please enter "ROCK", "PAPER", or "SCISSORS"`);
    }
    return playerChoice;
}

console.log(playerSelection());