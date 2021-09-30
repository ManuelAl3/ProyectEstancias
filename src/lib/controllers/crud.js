const conexion = require('../../database');

exports.save = (req, res) => {
    const question_id = req.body.question_id;
    const answer = req.body.answer;
    const user_id = req.body.user_id;
    const option_id = req.body.option_id;
    const answer_c = req.body.answer_c;
    /*const answerCheckRadio = req.body.answerCheckRadio;

    var answerCheckIngreso = '';
    var document = document.getElementsByName("answer_c");

    for (let i = 0; i < document.length; i++) {
        if (document[i].checked == false) {
            answerCheckIngreso  = answerCheckIngreso +0;
        } else {
            answerCheckIngreso  = answerCheckIngreso +1;
        }
    }*/

    //console.log(answerCheckIngreso + "-" + answer);
    conexion.query('INSERT INTO incomeSurvey (`answer_1`, `answer_2`, `answer_3`, `answer_4` ) VALUES (?,?,?,?)', [answer[0], answer[1], answer[2], answer[3]], (error, results) => {
        //console.log(answer);
        console.log(answer_c);
        //console.log(user_id);
        console.log(results);
        if (error) {
            console.log(error);
        } else {
            res.redirect('/');
        }
    })
}