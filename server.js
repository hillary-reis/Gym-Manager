const express = require ('express');    // express - facilitador de recursos
const nunjucks = require ('nunjucks'); // nunjucks - serve para reaproveitar o código
const routes = require ('./routes');
const methodOverride = require ('method-override');

const server = express ();

server.use (express.urlencoded({ extended: true })); // responsável por fazr funcionar o (req.body)

server.use (express.static ('./public'));

server.use (methodOverride('_method'));

server.use (routes); //middleware (liga o ponto 'a' ao ponto 'b' (começo e fim))

server.set ('view engine', 'njk');

nunjucks.configure ('views', {
  express: server,
  autoescape: false,
  noCache: true
});

server.listen (2000, function () {
  console.log ('server is running!');
});
