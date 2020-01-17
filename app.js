var great = require("./great");
great.english();
great.vietnamese();
const util = require('util');
async function fn() {
    return 'hello world';
  }
  const callbackFunction = util.callbackify(fn);
  
  callbackFunction((err, ret) => {
    if (err) throw err;
    console.log(ret);
  });
// Helllo test pull
