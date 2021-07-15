const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../database');
const helpers = require('../lib/helpers');

passport.use('local.signup', new LocalStrategy({ //LocalStrategy es un esquema simple de autenticación de nombre de usuario y contraseña.

    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true

}, async (req, username, password, done) => {
    console.log(done);
    const { first_last_name, second_last_name, email, rol } = req.body;
    const newUser = {
        username,
        first_last_name,
        second_last_name,
        email,
        password,
        rol
    };
    newUser.password = await helpers.encryptPassword(password);
    const result = await pool.query('INSERT INTO users SET ?', [newUser]);
    console.log(result);
    //newUser.id = result.insertId;
    //return done(null, newUser); //Desde aqui manda error 'done is not a fuction'
}));
/*
//Guarda el usuario dentro de la seseón
passport.serializeUser((user, done) => {
    done(null, user.id);
});

//
passport.deserializeUser(async (id, done) => {
    const rows = await pool.query('SELECT * FROM users Where id = ?', [id]);
    done(null, rows[0]);
}); */