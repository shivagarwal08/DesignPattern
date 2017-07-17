// Basic Module Pattern
var dom = {
    _counter = 0,
    generateId : function(){
        return 'customId'+  this._counter++;
    },
    create: function(tagName){
        var el = document.createElement(tagName);
        el.id = id || this.generateId();
        return el;
    }
}

var divEl = dom.create("div");
console.log(divEl.id); // customId0
var divEl2 = dom.create("div");
console.log(divEl2.id); // customeId1
 
//here we can also excess _counter and could update
console.log(dom._counter); // 1
dom._counter = "asfsd";
var divEl3 = dom.create("div");
console.log(divEl3.id); // customIdNaN