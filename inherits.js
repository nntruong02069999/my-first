const util = require("util");
const Events = require("events");

class Dialog extends Events {
    sayHello (data){
        console.log("Hello www" , data);
        this.emit("hello");
    }
}

var dialog = new Dialog();

dialog.on("hello",()=> {
    console.log("co  1 loi chao moi");
});

dialog.sayHello("Nam Truong");