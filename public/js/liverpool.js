endTime = new Date(2020, 5, 17, 16, 45, 0, 0);
monthElement = document.getElementById('month')
dayElement = document.getElementById('day')
hourElement = document.getElementById('hour')
secondElement = document.getElementById('second')
monthDiv = document.createElement('div')
dayDiv = document.createElement('div')
hourDiv = document.createElement('div')
secondDiv = document.createElement('div')
monthDiv.setAttribute('id', 'month-number')
dayDiv.setAttribute('id', 'day-number')
hourDiv.setAttribute('id', 'hour-number')
secondDiv.setAttribute('id', 'second-number')


var x = setInterval( () => {
    nowTime = new Date()
    monthDiff = endTime.getMonth() - nowTime.getMonth()

    if(monthDiff < 0) {
        monthDiff = 11 + monthDiff
    }

    daysDiff = endTime.getDate() - nowTime.getDate()
    if(daysDiff < 0) {
        daysDiff = 31 + daysDiff
    }

    hoursDiff = endTime.getHours() - nowTime.getHours()
    if(hoursDiff < 0) {
        hoursDiff = 24 + hoursDiff
    }

    minutesDiff = endTime.getMinutes() - nowTime.getMinutes()
    if(minutesDiff < 0) {
        minutesDiff = 60 + minutesDiff
    }

    secondsDiff = endTime.getSeconds() - nowTime.getSeconds()
    if(secondsDiff < 0) {
        secondsDiff = 60 + secondsDiff
    }

    console.log("Months: " + monthDiff + " Days: " + daysDiff + " Hours: " + hoursDiff + " Minutes: " + minutesDiff + " Seconds: " + secondsDiff)

    // monthText = document.createTextNode(monthDiff)
    // monthDiv.appendChild(monthText)
    monthDiv.innerHTML = monthDiff
    monthElement.appendChild(monthDiv)

    // dayText = document.createTextNode(daysDiff)
    // dayDiv.appendChild(dayText)
    dayDiv.innerHTML = daysDiff
    dayElement.appendChild(dayDiv)

    // monthText = document.createTextNode(monthDiff)
    // hourDiv.appendChild(hourText)
    hourDiv.innerHTML = hoursDiff
    hourElement.appendChild(hourDiv)

    // monthText = document.createTextNode(monthDiff)
    // monthDiv.appendChild(monthText)
    secondDiv.innerHTML = secondsDiff
    secondElement.appendChild(secondDiv)
    

}, 1000)

function countdown() {
    
}