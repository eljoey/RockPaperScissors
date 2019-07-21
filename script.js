//Variables for results of game   
let playerWins = 0;
let computerWins = 0;
let gameStarted = false;

function startGame() {
    let makeButton = document.querySelector('#start');
    if(!gameStarted) {
        resetGame();
        gameStarted = true;
        newResultLine('Game Started! Good Luck!');        
        makeButton.setAttribute('value', 'Reset Game')
    } else {
        resetGame();
        makeButton.setAttribute('value', 'Start Game')
    }    
}

// Makes computers selection.  
function computerPlay() {
    let randomPick = Math.floor(Math.random()*3)+1;
    if (randomPick == 1) {
        return "rock";
    } else if (randomPick == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}
  
function playRound(playerSelection) {
    computerSelection = computerPlay();
    if(!gameStarted) return;    

    if(playerSelection == "rock"){
        if(computerSelection == "paper") {
            newResultLine("You Lose! Paper beats Rock");
            computerTally();
        } else if (computerSelection == "scissors") {
            newResultLine("You Win! Rock beats Scissors");
            playerTally();
        } else {
            newResultLine("You Tie! The Computer also chose Rock");
        }
    } else if (playerSelection == "paper") {
        if(computerSelection == "scissors") {
            newResultLine("You Lose! Scissors beats Rock!");
            computerTally();            
        } else if (computerSelection == "rock") {
            newResultLine("You Win! Paper beats Rock");
            playerTally();
        } else {
            newResultLine("You Tie! The Computer also chose Paper");
        }
    } else if (playerSelection == "scissors"){
        if(computerSelection == "rock") {
            newResultLine("You Lose! Rock beats Scissors!");
            computerTally();
        } else if (computerSelection == "paper") {
            newResultLine("You Win! Scissors beats Paper");            
            playerTally();
        } else {
            newResultLine("You Tie! The Computer also chose Scissors");
        }
    }

}

function playerTally() {    
    playerWins +=1;    
    let wins = document.querySelector('.playerScore');
    wins.textContent = playerWins;
    winner();
}

function computerTally() {
    computerWins +=1;
    winner();
    let wins = document.querySelector('.computerScore');
    wins.textContent = computerWins;
}

function newResultLine(string) {
    const results = document.createElement('p')
    const paragraphText = document.createTextNode(string);
    results.appendChild(paragraphText);
    document.querySelector('.results').appendChild(results).scrollTop;
    
}

function resetGame() {
    playerWins = 0;
    computerWins = 0;
    gameStarted = false;

    let e = document.querySelector('.results')
    let deleteLines = e.lastElementChild;

    while (deleteLines) {        
        e.removeChild(deleteLines);
        deleteLines = document.querySelector('.results').lastElementChild;
    }
}

function winner() {
    if(playerWins >= 5) {
        gameStarted = false;
        newResultLine('Congratulations you beat the Computer! Hit reset to try again!');
    } else if(computerWins >= 5) {
        gameStarted = false;
        newResultLine('Aww the Computer beat you.  Hit reset to try again!')
    }

}