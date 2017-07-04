var express = require('express');
var utility = require('utility');

var app = express();

app.get('/', function(request, response){
  var q = request.query.q;
  var md5value = utility.md5(q);

  console.log(q + ' => ' + md5value);
  
  response.send(md5value);
});

app.listen(3000, function(req, res) {
  console.log('app is running at port 3000.');
})