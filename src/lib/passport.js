const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../database');
const helpers = require('../lib/helpers');

passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    first_last_nameField: 'first_last_name',
    second_last_nameField: 'second_last_name',
    emailField: 'email',
    enrollmentField: 'enrollment',
    passwordField: 'password',
    rolFiel: 'rol',
    passReqToCallback: true
}, async (req, name, done) => {
    
    const { email,
        first_last_name,
        second_last_name,
        enrollment,
        password,
        rol } = req.body;
    const newUser = {
        username,
        first_last_name,
        second_last_name,
        email,
        enrollment,
        password,
        rol
    };
    newUser.password = await helpers.encryptPassword(password);
    
    const result = await pool.query('INSERT INTO users SET ?', [newUser]);
    console.log(result);
    //newUser.id = result.insertId;
    //return done(null, newUser);
}));

//passport.serializeUser((usr, done) => {

//});