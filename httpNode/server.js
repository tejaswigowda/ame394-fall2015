var express = require("express"),
app = express(),
bodyParser = require('body-parser'),
errorHandler = require('errorhandler'),
methodOverride = require('method-override'),
hostname = process.env.HOSTNAME || 'localhost',
port = 8080;

app.get("/", function (req, res) {
      res.redirect("/index.html");
});

app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);
