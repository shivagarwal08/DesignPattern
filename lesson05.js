// Code reuse Pattern- Mixins - to make multiple inheritance easy
// Concept of mixin is to take an obejct and mix-in the functionalities
// of another object
// here we could take Person.prototype/ Dog.prototype (objects) and can min-in the 
// functionality of speaker/ mover objects
function Person(name) {
    this.name = name;
}
function Dog(name){
    this.name = name;
}

var speaker = {
    speak: function() {
        return this.name + " is speaking.";
    }
};

var mover = {
    walk: function(){
        return this.name + " is walking.";
    },
    run: function() {
        return this.name + " is running.";
    }
};

var arithmetic = {
    add: function() {
        return this.name + " is adding numbers together.";
    },
    multiply: function() {
        return this.name + " is multiplying numbers together.";
    }
};
// Jquery implemented as extend etc...
$.extend(Person.prototype, speaker, mover, arithmetic);
$.extend(Dog.prototype, speaker, mover);

var john = new Person("John Doe");
var fido = new Dog("Fido");
console.log(john.run === fido.run); // true

console.log(john.add()); // John Doe is adding ....