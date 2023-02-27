let scoreG = document.getElementById("score-g")
let scoreH = document.getElementById("score-h")
let score = 0
let scoreh = 0

function incby1(){
    score += 1
    scoreG.innerText = score
}
function incby2(){
        score += 2
        scoreG.innerText = score
}
function incby3(){
    score += 3
    scoreG.innerText = score
}

function inchby1(){
    scoreh += 1
    scoreH.innerText = scoreh
}
function inchby2(){
        scoreh += 2
        scoreH.innerText = scoreh
}
function inchby3(){
    scoreh += 3
    scoreH.innerText = scoreh
}