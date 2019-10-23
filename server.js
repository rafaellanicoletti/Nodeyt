// var http = require('http');

// function onRequest(req,res){
//     res.writeHead(200,{'Content-Type' : 'text/plain'});
//     res.write('Hello World');
//     res.end();
// }

// http.createServer(onRequest).listen(8000);

var http = require('http');
var fs = require('fs');


http.createServer(function onRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.readFile('./index.html', null, function(err,data){
        if (err){
            res.writeHead(404);
            res.write('File not found');
        } else{
            res.write(data);
        }
        res.end();
    })
   
}).listen(8000);