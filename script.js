const message = document.querySelector("#message");

const player1Score = document.querySelector("#player1score");
const player2Score = document.querySelector("#player2score");



const player1Dice = document.querySelector("#player1dice");
const player2Dice = document.querySelector("#player2dice");

const startBtn = document.querySelector("#start-game")
const rollBtn = document.querySelector("#rollbutton");
const resetBtn = document.querySelector("#resetbtn");

const celebrate = document.querySelector("#celebrate");
const rulesModal = document.querySelector("#rules");

//local variables
let score1 = 0;
let score2 = 0;
let thisRoll = 0;
player1Turn = true;

player1Dice.classList.add("active")

rollBtn.addEventListener("click", function() {
    // console.log("roll button clicked");
    thisRoll = Math.floor(Math.random() * 6) + 1
    if (player1Turn) {
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = "Player 2 turn"
        player1Dice.textContent = thisRoll;
        score1 += thisRoll;
        player1Score.textContent = score1
    } else {
        player1Dice.classList.add("active")
        player2Dice.classList.remove("active")
        message.textContent = "Player 1 turn"
        player2Dice.textContent = thisRoll;
        score2 += thisRoll;
        player2Score.textContent = score2
    }

    // console.log(score1)
    // console.log(score2)

    if(!player1Turn && (score1 >= 20 || score2 >= 20)) {
        rollBtn.style.display = "none"
        resetBtn.style.display = "block"
        if(score2 > score1) {
            celebrate.textContent = "🎊🎊"
            message.textContent = "Player 2 wins"
            confettiStart();
        } else if(score1 > score2) {
            celebrate.textContent = "🎊🎊"
            message.textContent = "Player 1 wins"
            confettiStart(); 
        } else {
            message.textContent = "It's a Draw"
        }
    }
    
    player1Turn = !player1Turn;

})

resetBtn.addEventListener("click", function() {
    // console.log("reset now")
    confettiStop();
    celebrate.textContent = ""
    message.textContent = "Player 1 turn"
    player1Score.textContent = 0
    player2Score.textContent = 0
    score1 = 0
    score2 = 0
    thisRoll = 0
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    player1Dice.classList.add("active")
    player2Dice.classList.remove("active")
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
})

startBtn.addEventListener("click", function() {
    rulesModal.style.display = "none"
})

const confettiStart = () => {
    setTimeout(function() {
        confetti.start();
    }, 1000)
}

const confettiStop = () => {
    setTimeout(function() {
        confetti.stop();
    }, 100)
}

