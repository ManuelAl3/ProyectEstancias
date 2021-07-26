const express = require('express');
const router = express.Router();

router. get('/', (req, res) => {
    res.send('Hello world');
});

//Ruta del login
router.get('/login', (req, res) => {
    res.render('auth/login');
});

//Ruta de las encuestas
router.get('/encuesta/encuesta-ingreso', function(req, res){
    res.render('quizzes/income-survey')
  });
  
  router.get('/encuesta/ficha-identificacion-alumnos', function(req, res){
    res.render('quizzes/student-identification')
  });
  
  router.get('/encuesta/estudio-socio-economico', function(req, res){
    res.render('quizzes/study-economic')
  });
  
  router.get('/encuesta/encuesta-egresados', function(req, res){
    res.render('quizzes/graduate-survey')
  });
  
  router.get('/encuesta/encuesta-seguimiento-egresados', function(req, res){
    res.render('quizzes/graduate-follow-up-survey')
  });

module.exports = router;