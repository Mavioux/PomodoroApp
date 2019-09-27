const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('landing-page');
});

router.get('/pomodoro', (req, res) => {
    res.render('pomodoro', {title: 'Hello', message: x.toString()});
});

module.exports = router;