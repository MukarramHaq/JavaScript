let homeScore = document.getElementById("home-score")
let awayScore = document.getElementById("away-score")
let homePoints = 0
let awayPoints = 0

function plusOne(){
    homePoints++
    homeScore.textContent = homePoints
}
function plusTwo(){
    homePoints+=2
    homeScore.textContent = homePoints
}
function plusThree(){
    homePoints+=3
    homeScore.textContent = homePoints
}

function plusOneAway(){
    awayPoints++
    awayScore.textContent = awayPoints
}
function plusTwoAway(){
    awayPoints+=2
    awayScore.textContent = awayPoints
}
function plusThreeAway(){
    awayPoints+=3
    awayScore.textContent = awayPoints
}