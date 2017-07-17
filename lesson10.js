// Creational Pattern - Singleton Pattern
// similar to Module pattern but its different to Module
// Module Pattern is to seperate the code
// An object has only one instance and provide single global access
var dom = (function() {
    var _counter = 0;
    var instance;

    function generateId() {
        return "customId" + _counter++;
    }

    function create(tagName, id) {
        var el = document.createElement(tagName);
        el.id = id || generateId();
        return el;
    }

    function createInstance() {
        return {
            generateId: generateId,
            create: create
        };
    }

    return {
        getInstance: function() {
            return instance || (instance = createInstance());
        }
    };

}());

var el = dom.getInstance().create("div");
console.log(el.id); //customId0
instance = dom.getInstance();
console.log(instance == dom.getInstance()); // true - same instance