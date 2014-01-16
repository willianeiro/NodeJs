var http = require('http');
var url = require('url');

function startServer(route){
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      
      res.write('Ip: ' + process.env.IP + '\n');
      res.write('port: ' + process.env.PORT + '\n');
      res.write('Hello World from Cloud9\n');
      
      var pathname = url.parse(req.url).pathname;
      route(pathname);
      
      res.end();
    }).listen(process.env.PORT);
}

exports.start = startServer;