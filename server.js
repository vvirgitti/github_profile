var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');

app.use('/static', express.static(__dirname+'/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(request, response){
  response.sendFile(path.join(__dirname + '/views/index.html'));
});

server.listen(process.env.PORT || 3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
