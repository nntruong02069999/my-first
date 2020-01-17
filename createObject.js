var Person = {
    firstName : "",
    lastName : "",
    getName : function  getName() {
        return this.firstName + " " + this.lastName;
    }
};

var name1 = Object.create(Person);

name1.firstName = "Nguyen Nam";
name1.lastName = "Truong";
console.log(name1.getName());
