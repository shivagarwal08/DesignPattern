// AMD Asynchronous Module Definition pattern - if we need a 
// dependency in one module we don't need to 
// add that in whole applicaiton instead we could add only
//  in that particular module where dependency is reuired
// using require js as a script loader

require(["lesson09_module"], function(dom){
    var el = dom.create("div");
    var el2 = dom.create("div");

    console.log(el.id); //customId0
    console.log(el2.id); //customId1
});