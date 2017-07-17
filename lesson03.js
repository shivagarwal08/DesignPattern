// Constructor Pattern
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;

    // every Person object we create, we are creating a new 
    // instance of sayName method
    this.sayName = function(){
        return "My name is " + this.firstName + " " + this.lastName;
    }
}

var johnDoe = new Person("John", "Doe");
var janeDoe = new Person("Jane", "Doe");

var isPerson = johnDoe instanceof Person; // true
var isSame = johnDoe.sayName === janeDoe.sayName; // false
// as each object of Person is having there own sayName method
// So create using Prototype