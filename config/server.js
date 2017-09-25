var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

// funciona como um middleware que permite indentificar um diretorio com informações estaticas, 
// fazendo com que os arquivos sejam acessados na raiz da nossa aplicação sem a necessidade de
// informar todo o caminho do arquivo. (ex: a view localiza a folder "css" diretamente)
app.use(express.static('./app/public'));

// transforma as informações passadas por requisições em json utilizando o bodyParser
app.use(bodyParser.urlencoded({extended: true}));

// middleware para utilizar as validações de models json nas requisições.
app.use(expressValidator())

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;