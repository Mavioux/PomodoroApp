const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

const User = require('../models/User');


//Register Page
router.get('/register', (req, res) => {
    res.render('register'); 
});


//Login Page
router.get('/login', (req, res) => {
    res.render('login'); 
});

//Handle Register 
router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];

    if(!name) {
        errors.push('Name cannot be empty')
    }
    if(!email) {
        errors.push('Email cannot be empty');
    }
    if(!password) {
        errors.push('Password cannot be empty');
    }
    if(!password2) {
        errors.push('Password confirmation cannot be empty');
    }
    if(password != password2) {
        errors.push("Passwords don't match");
    }
    if(password.length < 6) {
        errors.push('Password must be longer than 6 characters');
    }

    if(errors.length > 0) {
        res.render('register', {
            errors: errors,
            name: name,
            email: email,
            password: password,
            password2: password2,
        })
    }
    else {
        //Validation Passed 
        User.findOne( { email: email })
            .then((user) => {
                if(user) {
                    errors.push("User with email: '" + email + "' already exists");
                    render('register', { 
                        errors: errors,
                        name: name,
                        email: email,
                        password: password,
                        password2: password2,
                    })
                }
                else {
                    const newUser = new User( { 
                        name: name,
                        email: email,
                        password: password,
                    })
                    //Hash password
                    bcrypt.genSalt(10, (err, salt) => { 
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if(err) throw err;

                            newUser.password = hash;

                            //Save User
                            newUser.save()
                                .then((user) => {
                                    req.flash('success_msg', 'Registered succesfully. You can now log in.');
                                    res.redirect('/user/login');
                                })
                                .catch(err => console.log(err));
                        })
                    })
                }
            });
    }
})

//Handle Login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/user/login',
        failureFlash: true
    })(req, res, next);
});

//Handle Logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'Logged out.');
    res.redirect('/user/login');
})

module.exports = router;