var express = require('express');
var app = express();
var parser = require('body-parser')
var router = express.Router();
var products = require('./app.js');
module.exports = router;
// create products 
var products = new products


router.get('/', function (req, res) {
 res.render('pages/index');
})

router.get('/products', function (req, res) {
    res.render('pages/products',{products:products.get()});
})

router.get('/product-json', function (req, res) {
    res.json(products.get());
})