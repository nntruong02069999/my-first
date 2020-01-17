const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    

    res.writeHead(200,{"Content-Type": "text/html"});
    var html = fs.readFileSync(__dirname + "/http.html","utf8");

    var user = "Nguyen Nam Truong";
    html = html.replace("{user}", user); 

    res.end(html);

}).listen(1337,"127.0.0.1")