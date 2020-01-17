var fs = require("fs");

var content = fs.readFileSync(__dirname + "/readme.txt","utf8");
console.log(content);

var content2 = fs.readFile(__dirname + "/readme.txt",(err,data)=> {
    if (err) throw err;
    console.log(data);
});
console.log(content2);