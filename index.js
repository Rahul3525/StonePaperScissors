let userScore = 0;
let comScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const  userScorePara = document.querySelector("#user-score");
const  comScorePara = document.querySelector("#com-score");

const generateChoice = () => {
    // rock paper scissors
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}
const drawGame = () => {
    // console.log("Game was draw");
    msg.innerText = "Game was Draw. Play again !";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
      msg.innerText = `You Win! ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        comScore++;
        comScorePara.innerText=comScore;
        msg.innerText = `You lost! ${comChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice)
    //Generate computer choice
    const comChoice = generateChoice();
    // console.log("com choice = ", comChoice);
    if (userChoice === comChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = comChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = comChoice === "scissors" ? false : true;
        } else {
            // rock,paper
            userWin = comChoice === " rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }

}
choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});