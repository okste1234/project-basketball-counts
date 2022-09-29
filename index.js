const displayH = document.getElementById("displayH")
const displayG = document.getElementById("displayG")
const winning = document.getElementById("winning")
let countsH = 0
let countsG = 0

function add1H() {
    countsH += 1
    displayH.innerText = countsH
    clicker()
}

function add2H() {
    countsH += 2
    displayH.innerText = countsH
    clicker()
}

function add3H() {
    countsH += 3
    displayH.innerText = countsH
    clicker()
}

function add1G() {
    countsG += 1
    displayG.textContent = countsG
    clicker()
}

function add2G() {
    countsG += 2
    displayG.textContent = countsG
    clicker()
}

function add3G() {
    countsG += 3
    displayG.textContent = countsG
    clicker()
}

const clicker = () => {
    if (countsH > countsG) {
        winning.textContent = `Home Team is leading by ${countsH - countsG} points`
    }
    else if (countsG > countsH) {
        winning.textContent = `Guest Team is leading by ${countsG - countsH} points`
    } else {
        winning.textContent = `Teams playing Draw`
    }
}

function reset() {
    countsG = 0
    countsH = 0
    displayH.textContent = countsH
    displayG.textContent = countsG
    winning.textContent = `Teams playing Draw 0 : 0`
}
