const mysql = require('mysql');
const controller = {};
const { database } = require ('../../keys');
const pool = mysql.createPool(database);

controller.list = (req, res) => {
  pool.getConnection((err, conn) => {
    conn.query('SELECT * FROM answers', (err, respuestas) => {
     if (err) {
      res.json(err);
      //next(err);
     }
     console.log(respuestas);
     res.render('admin', {
        data: respuestas
     });
    });
  });
};

module.exports = controller;