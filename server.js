// require our dependencies
var express=require('express');
var expressLayouts = require('express-ejs-layouts')
var parser = require('body-parser')
var port=3000;
var app = express();
var router = require('./app/routes');

//use body parser
app.use(parser.urlencoded());

//use ejs and express layouts
app.set('view engine','ejs')
app.use(expressLayouts);

//route our app
app.use('/',router);
app.use(express.static(__dirname+'/public'));

//Start the Server
app.listen(port,()=>{
    console.log('server is running');
})