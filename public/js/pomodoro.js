let counter = 15 * 60
diffInMins = 15
let now = new Date()
let endTime = new Date(now.getTime() + diffInMins*60000);
console.log(now.getMinutes() + " : " + now.getSeconds())
console.log(endTime.getMinutes() + " : " + endTime.getSeconds())

let counterElement = document.getElementById("pomodoro-counter")
let minutesDiv = document.createElement("div");
let secondsDiv = document.createElement("div");
minutesDiv.setAttribute('id', "minutes")
secondsDiv.setAttribute('id', "seconds")


setTimeout( () => {
    countdown(counter)
}, 1000)


function countdown(c) {
    c = c - 1
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
    let timeInMinutesToString = document.createTextNode(timeDifferenceMinutes.toString());
    let timeInSecondsToString = document.createTextNode(timeDifferenceSeconds.toString());
    minutesDiv.appendChild(timeInMinutesToString)
    secondsDiv.appendChild(timeInSecondsToString)
    counterElement.appendChild(minutesDiv)
    counterElement.appendChild(secondsDiv)
    setTimeout( () => {
        minutesDiv.removeChild(minutesDiv.firstChild)
        secondsDiv.removeChild(secondsDiv.firstChild)
        countdown(c)
    }, 1000)
}