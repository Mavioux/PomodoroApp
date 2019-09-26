let express = require('express');
let mongoose = require('mongoose');
let app = express();

const PORT = 5000;

mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open', () => {
    console.log("Connected to Mongo");
}).on('error', () => {
    console.log('Connection error: ' + error);
});

//Setup Pug for dynamic pages
app.set('views', 'views');
app.set('view engine', 'pug');

//Set the server to serve static pages from the public directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/register', (req, res) => {
    res.render('register');
})

//When pressing sign up redirect to home page
app.post('/register', (req, res) => {
    res.redirect('/');
})

// app.get('/pomodoro', (req, res) => {
//     res.render('pomodoro', {title: 'Hello', message: x.toString()});
// });

app.listen(PORT, () => {
    console.log('Server started on localhost:' + PORT);
}).on('error', () => {
    console.log('Error deploying server - ');
});
