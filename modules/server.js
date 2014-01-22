var http = require('http');

function startServer(route){
    http.createServer(route).listen(process.env.PORT);
}

exports.start = startServer;