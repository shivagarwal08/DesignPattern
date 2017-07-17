// Behaviour Pattern - Observer Pattern - Integral Part of web development
// This defines an object called subject, and it notifies other objects when its state changes and we other are called observer
// Describes events as javascript and dom are heavily event driven
// Implementation of observer pattern - Public subscribe

require(["eventmanager"], function(evtman) {
    // event listener for document click event, subject is document object, and observer is our function
    /* document.addEventListener("click", function(evt) {

     });*/

    function foo(evt) {
        console.log(evt.message);
    }

    evtman.subscribe("test/foo", foo);

    evtman.publish("test/foo", { message: "Hello this is a custom event" });

    evtman.unsubscribe("test/foo", foo);

    evtman.publish("test/foo", { message: "this should not be seen" });

});


// output - Hello this is a custom event