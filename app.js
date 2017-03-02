var express = require('express');
var app = express();
app.use(express.static(__dirname + '/View'));

app.get('/', function(request, response){
	response.sendFile('index.html');
});

app.listen(3000);