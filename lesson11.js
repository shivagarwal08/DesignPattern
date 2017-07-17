// Creational Pattern - Factory Pattern - Creational Pattern
require(["lesson11_module"], function(controls) {

    var text = controls.create({ type: "text", value: "hello factory" });
    var check = controls.create({ type: "checkbox", chceked: true });

    document.body.appendChild(text);
    document.body.appendChild(check);
});