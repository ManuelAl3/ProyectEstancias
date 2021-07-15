const express = require('express');
const router = express.Router();

const passport = require('passport');

router.get('/signup', (req, res) => {
    res.render('auth/signup');
});

//Redirecciona a la ruta dependiendo si se registra bien el usuario
router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/singup',
    failureFlash: true
}));

router.get('/profile', (req, res) => {
    res.send('this si your Profile')
});

module.exports = router;