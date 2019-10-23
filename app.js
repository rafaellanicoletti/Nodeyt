var url = require('url');
var fs = require('fs');


function renderHTML(path,res) {
    fs.readFile(path,null, function(err,data){
        if (err){
            res.writeHead(404);
            res.write('file not found');
        }else{
            res.write(data);
        }
        res.end();

    });
}

module.exports = {
    handleRequest: function(req,res) {
        res.writeHead(200,{'Content-Type': 'text/html'});

        var path = url.parse(request.url).pathname;
        switch (path) {
            case '/';
            renderHTML('./index.html', res);
                break;
            case '/login';
            renderHTML('./login.html', res);
                break;
            default:
                res.writeHead(404);
                res.write('route not defined');
                res.end();

        }

    }
};