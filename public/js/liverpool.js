endTime = new Date(2020, 5, 17, 16, 45, 0, 0);
monthElement = document.getElementById('month')
dayElement = document.getElementById('day')
hourElement = document.getElementById('hour')
minuteElement = document.getElementById('minute')
secondElement = document.getElementById('second')
monthDiv = document.createElement('div')
dayDiv = document.createElement('div')
hourDiv = document.createElement('div')
minuteDiv = document.createElement('div')
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

    monthDiv.innerHTML = monthDiff
    monthElement.appendChild(monthDiv)

    dayDiv.innerHTML = daysDiff
    dayElement.appendChild(dayDiv)

    hourDiv.innerHTML = hoursDiff
    hourElement.appendChild(hourDiv)

    minuteDiv.innerHTML = minutesDiff
    minuteElement.appendChild(minuteDiv)

    secondDiv.innerHTML = secondsDiff
    secondElement.appendChild(secondDiv)
    

}, 1000)

function countdown() {
    
}