// Structural Pattern - Facade Pattern - Integral part of web application developement
// it basically hides complex code with easier to use higer level api
// e.g. JQuery, ajax cross browser functionalities

function addEvent(el, ev, fn) {
    if (el.addEventListener) {
        el.addEventListener(ev, fn, false);
    } else if (el.attachEvent) {
        el.attachEvent("on" + ev, fn);
    } else {
        el["on" + event] = fn;
    }
}

function removeEvent(el, ev, fn) {
    if (el.removeEventListener) {
        el.removeEventListener(ev, fn, false);
    } else if (el.detachEvent) {
        el.detachEvent("on" + ev, fn);
    } else {
        el["on" + event] = null;
    }
}