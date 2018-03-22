var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function(req, res) {
    var urlPath = url.parse(req.url).pathname;
    if(urlPath=="/data") {
        fs.readFile('./JSON/database.json', function(error, content) {
        res.end(content);
        });
    } else {
        
fs.readFile('./index.html', function (error, html) {   
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html);  
        res.end();  
    });
}
}).listen(9999);
console.log("The server is listening at localhost:9999");