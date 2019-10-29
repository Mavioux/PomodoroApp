diffInMins = 15
let counter = diffInMins * 60
let isStopped = true
let isPaused = false
let timeDifferenceMinutes
let timeDifferenceSeconds
let now
let endTime

let counterElement = document.getElementById("pomodoro-counter")
let startStopBtn = document.getElementById("start-stop-btn")
let pauseBtn = document.getElementById("pause-btn")
let resetBtn = document.getElementById("reset-btn")
let minutesDiv = document.createElement("div");
let secondsDiv = document.createElement("div");
let colonsDiv = document.createElement("div");
minutesDiv.setAttribute('id', "minutes")
secondsDiv.setAttribute('id', "seconds")
colonsDiv.setAttribute('id', "colons")

startStopBtn.onclick = () => {
    if(isStopped) {
        counter = 60 * diffInMins
        now = new Date()
        endTime = new Date(now.getTime() + diffInMins*60000)
        console.log(now.getMinutes() + " : " + now.getSeconds())
        console.log(endTime.getMinutes() + " : " + endTime.getSeconds())
        isStopped = false
        isPaused = false
        countdown()
    }
    else{
        minutesDiv.removeChild(minutesDiv.firstChild)
        colonsDiv.removeChild(colonsDiv.firstChild)
        secondsDiv.removeChild(secondsDiv.firstChild)
        isStopped = true
    }
}

pauseBtn.onclick = () => {
    if(!isPaused) {
        console.log(timeDifferenceMinutes)
        console.log(timeDifferenceSeconds)
        isPaused = true
    }
    else {
        now = new Date()
        endTime = new Date(now.getTime() + timeDifferenceMinutes * 60000 + timeDifferenceSeconds * 1000)
        isPaused = false
        minutesDiv.removeChild(minutesDiv.firstChild)
        colonsDiv.removeChild(colonsDiv.firstChild)
        secondsDiv.removeChild(secondsDiv.firstChild)
        countdown()
    }
}

resetBtn.onclick = () => {
    minutesDiv.removeChild(minutesDiv.firstChild)
    colonsDiv.removeChild(colonsDiv.firstChild)
    secondsDiv.removeChild(secondsDiv.firstChild)
    counter = 60 * diffInMins
    now = new Date()
    endTime = new Date(now.getTime() + diffInMins*60000)
    console.log(now.getMinutes() + " : " + now.getSeconds())
    console.log(endTime.getMinutes() + " : " + endTime.getSeconds())
    isStopped = false
    isPaused = false
    countdown()
}


function countdown() {
    counter = counter - 1
    now = new Date()
    timeDifferenceMinutes = Math.floor((endTime.getTime() - now.getTime()) / 1000 / 60)
    timeDifferenceSeconds = (now.getSeconds() - endTime.getSeconds())
    if(timeDifferenceSeconds > 0 ) {
        timeDifferenceSeconds = 60 - timeDifferenceSeconds
    }
    else{
        timeDifferenceSeconds = -timeDifferenceSeconds
    }
    console.log(timeDifferenceMinutes + " : " + timeDifferenceSeconds)
    if(timeDifferenceMinutes < 10) {
        timeDifferenceMinutes = '0' + timeDifferenceMinutes.toString();
    }
    if(timeDifferenceSeconds < 10) {
        timeDifferenceSeconds = '0' + timeDifferenceSeconds.toString();
    }
    let timeInMinutesToString = document.createTextNode(timeDifferenceMinutes.toString())
    let timeInSecondsToString = document.createTextNode(timeDifferenceSeconds.toString())
    let colonsString = document.createTextNode(':')
    minutesDiv.appendChild(timeInMinutesToString)
    secondsDiv.appendChild(timeInSecondsToString)
    colonsDiv.appendChild(colonsString)
    counterElement.appendChild(minutesDiv)
    counterElement.appendChild(colonsDiv)
    counterElement.appendChild(secondsDiv)
    if(counter < 0 || isPaused) {
        console.log('countdown finished or paused')
        return
    }
    if(isStopped) {
        console.log('Countdown Stopped!')
    }
    setTimeout( () => {
            minutesDiv.removeChild(minutesDiv.firstChild)
            colonsDiv.removeChild(colonsDiv.firstChild)
            secondsDiv.removeChild(secondsDiv.firstChild)
        countdown()
    }, 1000)
}