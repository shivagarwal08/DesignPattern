// Structural Pattern- Command Pattern - the goal of command pattern is to encapsulate an action with in an object
// this can be goes against the grain OOP, as OOP revolves round the object, as Object is Noun in OOP but Command Pattern uses object as a Verb
// Command Pattern - It give the abiblity to seperate the responsibility of issueing a command from anything that is executing 
// the command, thuis seperation allows us to write an clean API

// Encapsulating an action with in an object

function Calculator() {
    this._currentValue = 0;
}
Calculator.prototype = {
    add: function(value) {
        this._currentValue += value;
    },
    subtract: function(value) {
        this._currentValue -= value;
    },
    getCurrentValue: function() {
        return this._currentValue;
    }
};
// if Calculator is like this any one using API wants to change then out API should be changed
// like adding new methods etc.