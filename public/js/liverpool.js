endTime = new Date(2020, 5, 17, 16, 45, 0, 0);
// endTime = Date.UTC(endTime)

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

}, 1000)

function countdown() {
    
}