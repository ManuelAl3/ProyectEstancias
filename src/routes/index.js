const express = require('express');
const router = express.Router();

router. get('/', (req, res) => {
    res.send('Hello world');
});

//Ruta login
router.get('/login', (req, res) => {
    res.render('auth/login');
});

module.exports = router;