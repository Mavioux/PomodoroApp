let express = require('express');
let mongoClient = require('mongodb').MongoClient;
let url = 'mongodb://localhost/maviouxSiteClientsDB';
let app = express();

const PORT = 5000;

//Setup Pug for dynamic pages
app.set('views', 'views');
app.set('view engine', 'pug');

//Set the server to serve static pages from the public directory
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.get('/register', (req, res) => {
    
// })

// app.get('/pomodoro', (req, res) => {
//     res.render('pomodoro', {title: 'Hello', message: x.toString()});
// });

app.listen(PORT, () => {
    console.log('Server started on localhost:' + PORT);
});
