const express = require('express');
const router = express.Router();

router.get('/register', (req, res) => {
    res.render('register'); 
});

router.get('/login', (req, res) => {
    res.render('login'); 
});

router.post('/register', (req, res) => {
    res.redirect('/');
})

module.exports = router;