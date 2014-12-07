var request = require('request');
var d3 = require('d3');

var key = "1CNaI_i1BiNbtN482S8343kClvpTlO3nLA5wFl1aot6k";  // Hello World

var url = "https://docs.google.com/spreadsheets/d/" + key + "/gviz/tq?tqx=out:csv";

console.log("url: " + url);
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var data = d3.csv.parse(body);
    console.log(body);
    console.log(data);
  } else {
    console.log("error: " + error);
    console.log("response status code: " + response.statusCode);
  }
})
