// Command Pattern - the goal of command pattern is to encapsulate an action with in an object
// this can be goes against the grain OOP, as OOP revolves round the object, as Object is Noun in OOP but Command Pattern uses object as a Verb
// Command Pattern - It give the abiblity to seperate the responsibility of issueing a command from anything that is executing 
// the command, thuis seperation allows us to write an clean API

function Calculator() {
    this._currentValue = 0;
}
Calculator.prototype = {
    execute: function(command) {
        this._currentValue = command.execute(this._currentValue)
    },
    getCurrentValue: function() {
        return this._currentValue;
    }
};

// Now it's take and command and executes it
// abstract object
function Command(fn, value) {
    this.execute = fn;
    this.value = value;
}

function AddCommand(value) {
    Command.call(this, function(value) {
        return value + this.value;
    }, value);
}

function SubCommand(value) {
    Command.call(this, function(value) {
        return value - this.value;
    }, value);
}

var calc = new Calculator();

calc.execute(new AddCommand(19));
console.log(calc.getCurrentValue()); //19

calc.execute(new AddCommand(1));
console.log(calc.getCurrentValue()); //20