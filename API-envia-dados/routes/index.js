var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send("<h1>Hello World!</h1> Para inserir dados usando a API, vá até <a href=\"http://localhost:9001/api/sendData\">http://localhost:9001/api/sendData</a>");
  //res.render('index', { title: 'Express' });
});

module.exports = router;
