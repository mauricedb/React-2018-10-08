class Calculator {
  // el: HTMLElement = null;

  constructor(private readonly el: HTMLElement | null) {
    // this.el = el;
  }

  public add(x: number, y: number): number {
    // this.el = null;
    const result = x + y;
    if (this.el) {
      this.el.textContent = result.toString();
    }
    return result;
  }

  subtract(x: number, y: number) {
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
  lastName: null as string | null
};

person.firstName = "Joe";

person.lastName = "lkdsd";

interface Sleepy {
  sleep(): void;
}

class Cat implements Sleepy {
  sleep() {}
  climb() {}
}

var cat: Sleepy;

cat = new Cat();
cat.sleep();

class Dog {
  sleep() {}
  attack() {}
}

var dog: Sleepy;
dog = new Dog();

dog = {
  sleep() {}
};

function gotoSleep(animal: { sleep(): void }) {
  animal.sleep();
}

gotoSleep(dog);

function printFullName(o: { fistName: string; lastName: string }) {
  console.log(o.fistName + o.lastName);
}

printFullName({ fistName: "", lastName: "" });

interface DoStufffOption {
  x: number;
  y: number;
}

function doStuff(options: Partial<DoStufffOption>) {}

doStuff({ x: 1, y: 2 });

doStuff({});

const x: number[] = [1];

// maurice.de.beijer@gmail.com

type Animal = Dog | Cat;

function doYourThing(animal: Animal) {
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

async function getData() {
  try {
    const rsp = await fetch("http://theproblemsolver.nl");
    if (rsp.ok) {
      const txt = await rsp.text();
      console.log(txt);
    }
  } catch (err) {
    console.warn(err);
  }
}

getData();
