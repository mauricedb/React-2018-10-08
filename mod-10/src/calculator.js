var Calculator = /** @class */ (function () {
    // el: HTMLElement = null;
    function Calculator(el) {
        this.el = el;
        // this.el = el;
    }
    Calculator.prototype.add = function (x, y) {
        // this.el = null;
        var result = x + y;
        this.el.textContent = result.toString();
        return result;
    };
    Calculator.prototype.subtract = function (x, y) {
        var result = x - y;
        this.el.textContent = result.toString();
        return result;
    };
    return Calculator;
}());
var el = document.getElementById("result");
var calc = new Calculator(el);
console.log("1 + 2 =", calc.add(1, 2));
// let n = 2;
// n = 3
// n = {}
var person = {
    firstName: "Maurice",
    lastName: null
};
person.firstName = "Joe";
person.lastName = "lkdsd";
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.sleep = function () { };
    Cat.prototype.climb = function () { };
    return Cat;
}());
var cat;
cat = new Cat();
cat.sleep();
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.sleep = function () { };
    Dog.prototype.attack = function () { };
    return Dog;
}());
var dog;
dog = new Dog();
dog = {
    sleep: function () { }
};
function gotoSleep(animal) {
    animal.sleep();
}
gotoSleep(dog);
function printFullName(o) {
    console.log(o.fistName + o.lastName);
}
printFullName({ fistName: "", lastName: "" });
function doStuff(options) {
}
doStuff({ x: 1, y: 2 });
doStuff({});
var x = [1];
