var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hola! Aquí está la lista de precios');
});

module.exports = router;
