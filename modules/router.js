exports.route = function(){
        var express = require("express");
        var app = express();

        app.use(express.logger());

        app.all("*", function(request, response, next) {
          response.writeHead(200, { "Content-Type": "text/plain" });
          next();
        });

        app.get("/", function(request, response) {
          response.end("Welcome to the homepage!");
        });

        app.get("/about", function(request, response) {
          response.end("Welcome to the about page!");
        });

        app.get("*", function(request, response) {
          response.end("404!");
        });
//https://github.com/kirbysayshi/vash
        return app;
    };