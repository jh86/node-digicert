var fs = require('fs')
var express = require('express')
var app = express();

var docRoot = __dirname+'/doc/www.digicert.com/clients/rest/docs/retail'

app.get('/', function(req, res) {
  fs.createReadStream(docRoot+'/index.html').pipe(res);
})

app.get('/clients/rest/docs/retail/:page', function(req, res) {
  fs.createReadStream(docRoot+'/'+req.params.page).pipe(res);
})

app.get('/clients/rest/docs/retail/:sub/:page', function(req, res) {
  fs.createReadStream(docRoot+'/'+req.params.sub+'/'+req.params.page).pipe(res);
})

app.use(express.static(__dirname+'/doc/www.digicert.com'))

app.listen(3000)
