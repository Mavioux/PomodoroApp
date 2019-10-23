const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

router.get('/', (req, res) => {
    res.render('landing-page');
});

router.get('/pomodoro', (req, res) => {
    res.render('pomodoro', {title: 'Hello', message: x.toString()});
});

//Handle dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dashboard', {
        name: req.user.name
    });
})

module.exports = router;