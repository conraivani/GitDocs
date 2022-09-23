var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('Hola! Soy la página de Nosotros. Acá verás todos los detalles acerca de nuestra empresa.');
});

module.exports = router;
