function computerPlay() {
    const choices = ['ROCK', 'PAPER', "SCISSORS"];
    const random = Math.floor(Math.random() * choices.length);
    return choices[random];
}



