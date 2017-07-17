// Decorator Pattern (from Inheritance Pattern lesson04 )

function Coffee() {
}

Coffee.prototype.cost = function () {
    return 5;
};

Coffee.small = function (coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost - 1;
    }
};

Coffee.medium = function (coffeeObj) { }

Coffee.large = function (coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost + 1;
    }
};

Coffee.sugar = function (coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost + .15;
    }
};

Coffee.creamer = function (coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost + .15;
    }
};

Coffee.whippedCream = function (coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost + .15;
    }
};


Coffee.milk = function (coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost + .15;
    }
};

Coffee.foam = function (coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost + .15;
    }
};

Coffee.chocolate = function (coffeeObj) {
    var cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost + .15;
    }
};

Coffee.mocha = function (coffeeObj) {
    Coffee.milk(coffeeObj);
    Cofffee.foam(coffeeObj);
    Coffee.chocolate(coffeeObj);
    var cost = coffeeObj.cost();
    coffeeObj.cost = function () {
        return cost;
    };
};

var coffee = new Coffee();
var mocha = new Coffee();

Coffee.large(coffee);
Coffee.whippedCream(coffee);
console.log(coffee.cost()); // 6.15
Coffee.medium(mocha);
Coffee.mocha(mocha);
console.log(mocha.cost()); // 5.45


