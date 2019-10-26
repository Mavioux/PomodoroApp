let counter = 15 * 60
 let counterElement = document.getElementById("pomodoro-counter")
 let div = document.createElement("div");
 div.setAttribute('id', "added")


setTimeout( () => {
    countdown(counter)
}, 1000)


function countdown(c) {
    c = c - 1
    console.log(c)
    var cString = document.createTextNode(c.toString());
    div.appendChild(cString)
    counterElement.appendChild(div)
    setTimeout( () => {
        div.removeChild(div.firstChild)
        countdown(c)
    }, 1000)
}