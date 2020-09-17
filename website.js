var compScore = 0;
var userScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices=['r','p','s'];
    const randomno=Math.floor(Math.random()*3);
    return choices[randomno];
}
function convertToWord(letter) {
    if(letter=="r")
        return "Rock";
    else if(letter=="p")
        return "Paper";
    else
        return "Scissors";
}
function win(userChoice,compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = convertToWord(userChoice) + smallUserWord + " beats " + convertToWord(compChoice) + smallCompWord + " You win!!";
    //document.getElementById(userChoice).classList.add('green-glow');
    //setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow')} 1000);
}

function lose(userChoice,compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = convertToWord(compChoice) + smallUserWord + " beats " + convertToWord(userChoice) + smallCompWord + " You lost!!";
}
function draw(userChoice,compChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = convertToWord(userChoice) + smallUserWord + " equals " + convertToWord(compChoice) + smallCompWord + " It's a draw!!";
}
function game(userChoice) {
    var compChoice = getComputerChoice();
    switch(userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice,compChoice);
            break;
        case "ss":
        case "rr":
        case "pp":
            draw(userChoice,compChoice);
            break;
        }
}
function main() {
    rock_div.addEventListener('click',function() {
    game("r");
    })
    paper_div.addEventListener('click',function() {
    game("p");
    })
    scissors_div.addEventListener('click',function() {
    game("s");
    })

}
main();