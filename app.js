let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"]
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function win(userChoice,computerChoice){
userScore++;
userScore_span.innerHTML= userScore;
computerScore_span.innerHTML= computerScore;
result_p.innerHTML= userChoice + " beats " + computerChoice + " You Win!";
document.getElementById(userChoice).classList.add('greenglow');
setTimeout(function () { document.getElementById(userChoice).classList.remove('greenglow')},1000);
    

}



function lose(userChoice,computerChoice){
computerScore++;
computerScore_span.innerHTML=computerScore;
result_p.innerHTML= computerChoice + " beats " + userChoice + " You lose!";
document.getElementById(userChoice).classList.add('redglow');
setTimeout(function () { document.getElementById(userChoice).classList.remove('redglow')},1000);
}




function draw(userChoice,computerChoice){
    result_p.innerHTML= computerChoice + " and " + userChoice + " its a draw";
    document.getElementById(userChoice).classList.add('greyglow');
setTimeout(function () { document.getElementById(userChoice).classList.remove('greyglow')},1000);
}



function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("userChoice =>" + userChoice);
    console.log("computerChoice =>" + computerChoice);
    switch (userChoice + computerChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
               win(userChoice,computerChoice);
            break;
        case "rockpaper":
        case "scissorrock":
        case "paperscissor":
            lose(userChoice,computerChoice);
            break;
        case "rockrock":
        case "scissorscissor":
        case "paperpaper":
            draw(userChoice,computerChoice);
           break;
    }


}
function main() {
    paper_div.addEventListener('click', function () {
        game("paper");
    })
    rock_div.addEventListener('click', function () {
        game("rock");
    })
    scissor_div.addEventListener('click', function () {
        game("scissor");
    })
}
main();
