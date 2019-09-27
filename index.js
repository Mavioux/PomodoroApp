let express = require('express');
let mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
let app = express();
const PORT = 5000;

//Set DB
const db = require('./config/keys').MongoURI;

//Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected!'))
    .catch(err =>  console.log(err));

//EJS       
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Set the server to serve static pages from the public directory
app.use(express.static('public'));

//Routes
app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));

app.listen(PORT, () => {
    console.log('Server started on localhost:' + PORT);
}).on('error', () => {
    console.log('Error deploying server - ');
});
