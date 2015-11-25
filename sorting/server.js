var jsonObj = require("./feed.json");
  for (var i = 0; i < jsonObj.length - 1; i++)
  {
    jsonObj[i].date = new Date(jsonObj[i].date).getTime();
  }

var express = require("express"),
app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 8080;

app.get("/", function (req, res) {
    res.redirect("/index.html");
});

app.get("/getSortedJSON", function (req, res) {
    res.redirect("/index.html");
});

app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);

function selectionSort(key)
{
  var arr = jsonObj;
  for (var i = 0; i < arr.length - 1; i++)
    {
        var min = i;  // record the position of the smallest
        for (var j = i + 1; j < arr.length; j++)
        {
        // update min when finding a smaller element
        if (arr[j][key] < arr[min][key])
            min = j;
        }
 
        // put the smallest element at position i
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
  return arr;
}


console.log(selectionSort("title"));
