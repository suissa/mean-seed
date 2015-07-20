var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/powerevent-test');

var db = mongoose.connection;
db.on('error', function(err){
    console.log('Erro de conexao.', err);
    /*
{ [MongoError: connect ECONNREFUSED] name: 'MongoError', message: 'connect ECONNREFUSED' }
    */
});
db.on('open', function () {
  console.log('Conexão aberta.')
});
db.on('connected', function(err){
    console.log('Conectado')
});
db.on('disconnected', function(err){
    console.log('Desconectado')
});

db.on('error',function (err) {
  console.log('Erro de padrão de conexão do Mongoose: ' + err);
});

process.on ('SIGINT', function () {
  db.close (function () {
    console.log ('conexão Mongoose desconectada através de término do node CRTL + C');
    process.exit (0);
  });
});

module.exports = db;
