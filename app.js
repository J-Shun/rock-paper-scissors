// for counting score
const userScore = document.querySelector('.user-score');
const computerScore = document.querySelector('.computer-score');
let userTotalScore = 0;
let computerTotalScore = 0;

// for update the display
const userChoiceDisplay = document.querySelector('.user-img-container');
const computerChoiceDisplay = document.querySelector('.computer-img-container');


// for checking winner
const winner = document.querySelector('.result');

const button = document.querySelector('a');
console.log(button);

const select = document.querySelectorAll('.card');

select.forEach(choice =>  {
    choice.addEventListener('click', (e) => {
        let userChoice = e.target.id;
        computerChoice = computerPlay()
        checkGame (userChoice, computerChoice);
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
    const rockImage = '<img src="./image/rock.jpg" alt="rock">';
    const paperImage = '<img src="./image/paper.jpg" alt="rock">';
    const scissorsImage = '<img src="./image/scissors.jpg" alt="rock">';
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

function checkWinner(userTotalScore, computerTotalScore) {
    if (userTotalScore === 5) {
        winner.innerHTML = "<p>You Win!</p>"
    } else if (computerTotalScore === 5) {
        winner.innerHTML = "<p>You Lose!</p>";
    }
}

function checkGame (userChoice, computerChoice) {
    if (userTotalScore < 5 && computerTotalScore < 5) {
        gameStart(userChoice, computerChoice);
        updateChoice(userChoice, computerChoice);
        updateScore();
        checkWinner(userTotalScore, computerTotalScore);
    }
}

button.addEventListener('click', () => {
    userTotalScore = 0;
    computerTotalScore = 0;
    winner.innerHTML = "<p>Result</p>";
    userChoiceDisplay.innerHTML = "";
    computerChoiceDisplay.innerHTML = "";
    updateScore();
})