const fs = require("fs");

module.exports = {
    createNewFile : (fileName) => {
        const fd = fs.openSync(fileName,'w');
    },
    saveJsonObjecttoFile : (obj,fileName) => {
        const jsonString = JSON.stringify(obj);
    
        fs.writeFile(fileName,jsonString,"utf8",(err,data) => {
            if (err) throw err;
            console.log(`Save to file ${fileName}`);
        });
    }
}



