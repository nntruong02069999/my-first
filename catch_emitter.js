const Emitter = require("events");

var emitter = new Emitter();

emitter.on ("bad",function(){
    console.log("Một môn nào đó bị điêm kém");
});

emitter.on("bad",function(){
    console.log("Đã có điểm kém, cần thông báo cho phụ huynh");
});

emitter.on("good",function(){
    console.log("Điểm cao đấy");
});

var diem = [10,6,4,9];
for (var s of diem)
{
    if (s > 6 )
    {
        console.log("Điểm này ok : ",s);
        emitter.emit("good");
    }
    if (s <= 6)
    {
        console.log("Tệ quá : ",s);
        emitter.emit("bad");
    }
}

const myEmitter = new Emitter();

myEmitter.on("event",function(a,b) {
    console.log(a,b,this, this === myEmitter);
});

myEmitter.emit("event",2,2);