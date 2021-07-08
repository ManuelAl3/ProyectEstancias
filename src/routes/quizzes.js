const express = require('express');
const router = express.Router();

// pool hace referencia a la coneccion de la base de datos
const pool = require ('../database');

router.get('/add', (req, res) => {
    res.render('quizzes/add');
});

router.post('/add', (req, res) => {
    res.send('received');
});

module.exports = router;