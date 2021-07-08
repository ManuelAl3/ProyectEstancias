const express = require('express');
const router = express.Router();

const passport = require('passport');

router.get('/singup', (req, res) => {
    res.render('auth/signup');
});


router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/singup',
    failureFlash: true
}));

router.get('/profile', (req, res) => {
    res.send('this si your Profile')
});

module.exports = router;