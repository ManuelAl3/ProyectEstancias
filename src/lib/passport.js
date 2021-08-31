const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const pool = require('../database');
const helpers = require('../lib/helpers');

passport.use('local.signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    //console.log(req.body);
    const rows = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length > 0) {
        //console.log(rows.length);
        const user = rows[0];
        const validPassword = await helpers.matchPassword(password, user.password);
        if (validPassword) {
            done(null, user, req.flash('success', 'Welcome ' + user.username));
            //console.log(done);
        } else {
            done(null, false, req.flash('message', 'Contraseña Incorrecta'));
        }
    } else {
        return done(null, false, req.flash('message', 'El correo no existe'));
    }
    
}));

passport.use('local.signup', new LocalStrategy({ //By default, LocalStrategy expects to find credentials in parameters named username and password.

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
    console.log(req.body);
    newUser.password = await helpers.encryptPassword(password);
    const result = await pool.query('INSERT INTO users SET ?', [newUser]);
    console.log(result);
    newUser.user_id = result.insertId;
    return done(null, newUser);
}));

//Guarda el usuario dentro de la sesión
passport.serializeUser((user, done) => {
    done(null, user.user_id);
});

//
passport.deserializeUser(async (id, done) => {
    const rows = await pool.query('SELECT * FROM users Where user_id = ?', [id]);
    done(null, rows[0]);
});