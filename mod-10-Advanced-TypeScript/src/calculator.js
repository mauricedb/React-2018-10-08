"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Calculator {
    // el: HTMLElement = null;
    constructor(el) {
        this.el = el;
        // this.el = el;
    }
    add(x, y) {
        // this.el = null;
        const result = x + y;
        if (this.el) {
            this.el.textContent = result.toString();
        }
        return result;
    }
    subtract(x, y) {
        const result = x - y;
        if (this.el) {
            this.el.textContent = result.toString();
        }
        return result;
    }
}
const el = document.getElementById("result");
const calc = new Calculator(el);
console.log("1 + 2 =", calc.add(1, 2));
// let n = 2;
// n = 3
// n = {}
const person = {
    firstName: "Maurice",
    lastName: null
};
person.firstName = "Joe";
person.lastName = "lkdsd";
class Cat {
    sleep() { }
    climb() { }
}
var cat;
cat = new Cat();
cat.sleep();
class Dog {
    sleep() { }
    attack() { }
}
var dog;
dog = new Dog();
dog = {
    sleep() { }
};
function gotoSleep(animal) {
    animal.sleep();
}
gotoSleep(dog);
function printFullName(o) {
    console.log(o.fistName + o.lastName);
}
printFullName({ fistName: "", lastName: "" });
function doStuff(options) { }
doStuff({ x: 1, y: 2 });
doStuff({});
const x = [1];
function doYourThing(animal) {
    if (animal instanceof Dog) {
        animal.attack();
    }
    if (animal instanceof Cat) {
        animal.climb();
    }
    animal.sleep();
}
// function doStuff2(option: 1 | "one" | true) {
//   return 1 - +option;
// }
// doStuff2(1);
// doStuff2(2);
// doStuff2("one");
// doStuff2("two");
// function getData() {
//   fetch("http://theproblemsolver.nl")
//     .then(rsp => rsp.text())
//     .then(txt => console.log(txt))
//     .catch(err => console.warn(err));
// }
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const rsp = yield fetch("http://theproblemsolver.nl");
            if (rsp.ok) {
                const txt = yield rsp.text();
                console.log(txt);
            }
        }
        catch (err) {
            console.warn(err);
        }
    });
}
getData();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVO0lBQ2QsMEJBQTBCO0lBRTFCLFlBQTZCLEVBQXNCO1FBQXRCLE9BQUUsR0FBRixFQUFFLENBQW9CO1FBQ2pELGdCQUFnQjtJQUNsQixDQUFDO0lBRU0sR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQzdCLGtCQUFrQjtRQUNsQixNQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN6QztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxRQUFRLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDM0IsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDekM7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdDLE1BQU0sSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFdkMsYUFBYTtBQUNiLFFBQVE7QUFDUixTQUFTO0FBRVQsTUFBTSxNQUFNLEdBQUc7SUFDYixTQUFTLEVBQUUsU0FBUztJQUNwQixRQUFRLEVB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