// Creational Pattern - Factory Pattern
// to create objects, could be of different types, they are usually releated to same wawy
// like they could share same parent object or same interface

define(["lesson09_module"], function(dom) {
    function createInput(type) {
        var el = dom.create("input");
        el.type = type;
        return el;
    }
    var controls = {
        text: function(options) {
            var el = createInput("text");
            if (typeof options.value !== "undefined") {
                el.value = options.value;
            }
            return el;

        },
        checkbox: function(options) {
            var el = createInput("checkbox");
            if (typeof options.value !== "undefined") {
                el.checked = options.checked;
            }
            return el;
        }
    };

    return {
        create: function(options) {
            var type = options.type ? options.type.toLowercase() : undefined;
            if (!type || !controls[type]) {
                throw new {
                    message: type + " is not sipported."
                };
            }
            return controls[type](options);
        }
    }
});