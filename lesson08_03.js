// Basic Module Pattern - with clouser
// Basic Module Pattern uses an immediately invoked function 
// and returns an object
// If we don't want to defined public method
// Here we could also give third party jQuery etc
var dom = (function (jq) {
    var _counter = 0;
    function generateId() {
        return "customId" + _counter++;
    }
    function create(tagName, id) {
        var el = document.createElement(tagName);
        el.id = id || generateId();
        return el;
    }

    return {
        generateId: generateId,
        create: create
    };
}(jQuery));

var el = dom.create("div");
console.log(el.id); // customId0
var el2 = dom.create("div");
console.log(el2.id); // customeId1

//here we can not excess _counter
console.log(dom._counter); // undefined