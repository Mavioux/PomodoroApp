let express = require('express');
let app = express();

const PORT = 5000;

let time = 60;

//Setup Pug for dynamic pages
app.set('views', 'views');
app.set('view engine', 'pug');


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.get('/pomodoro', (req, res) => {
    res.render('pomodoro', {title: 'Hello', message: x.toString()});
});

app.listen(PORT, () => {
    console.log('Server started on localhost:' + PORT);
});

function decreaseTime () {
    setTimeout(time = time - 1, 1000);
}
