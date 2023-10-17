let homeScore = 0
let guestScore = 0
let btnNewGame = document.getElementById("newgame-btn")
let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")


function newGame() {
    if (confirm("Set initial scores for New Game?")) {
        homeScore = 0
        guestScore = 0
        scoreHome.textContent = 0
        scoreGuest.textContent = 0
    }
}

function addScore() {    
    if (arguments[0] === "home") {
        homeScore += arguments[1]
        scoreHome.textContent = homeScore
    } else {
        guestScore += arguments[1]
        scoreGuest.textContent = guestScore
    }
}