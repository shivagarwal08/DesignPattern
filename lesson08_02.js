// Basic Module Pattern - with clouser
// Basic Module Pattern uses an immediately invoked function
// and returns an object
var dom = (function () {
    var _counter = 0;
    return {
        generateId: function () {
            return 'customId' + _counter++;
        },
        create: function (tagName, id) {
            var el = document.createElement(tagName);
            el.id = id || this.generateId();
            return el;
        }
    };
}());

var el = dom.create("div");
console.log(el.id); // customId0
var el2 = dom.create("div");
console.log(el2.id); // customeId1

//here we can not excess _counter
console.log(dom._counter); // undefined