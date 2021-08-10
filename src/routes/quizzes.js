const express = require('express');
const router = express.Router();

// pool hace referencia a la coneccion de la base de datos
const pool = require ('../database');

router.get('/add', (req, res) => {
    res.render('quizzes/add');
});

router.post('/add', async (req, res) => {
    //console.log(req);
    const data = req.body;
    console.log(data);
    let result;
    const sql = "INSERT INTO answers (`answer`,`user_id`,`option_id`,`question_id`) VALUES (?,?,?,?)"
    for(i = 0; i < data.question_id.length; i++){
        let answer = data.answer[i];
        let user_id = data.user_id[i];
        let option_id = data.option_id[i] ? data.option_id[i] : null;
        let question_id = data.question_id[i];
        result = await pool.query(sql, [answer, user_id, option_id, question_id]);
    };
    
    //res.send('received');
    res.json(result);
});



module.exports = router;