function getComputerChoice() {
    let x = Math.floor(Math.random() * 3); 
    if (x === 0)
        return "rock";
    else if (x === 1)
        return "paper";
    else   
        return "scissors";
}



function getHumanChoice() {
   let answer = (prompt("Rock, Paper, or Scissors?")).toLowerCase();   
            
    return answer;
}



function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("paper beats rock, a point for the computer.");
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Rock beats scissors; a point for you!");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Paper beats rock; a point for you!");
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("Scissors beats paper; a point for the computer.");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Rock beats scissors; a point for the computer.");
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Scissors beats paper; a point for you!");
        humanScore++;
    }
  
}



function playGame() {

    computerScore = 0;
    humanScore = 0;

    for (i = 0; i < 5; i++)
        playRound();

    if (humanScore > computerScore) {
        console.log("Congratulations, you win!!");
    } 
    else if (computerScore > humanScore){
        console.log("Loser!!! Bahaha");
    }
    else {
        console.log("It's a damned tie! :(");
    }
}

playGame();
