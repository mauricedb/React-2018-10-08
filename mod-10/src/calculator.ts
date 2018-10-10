class Calculator {
  // el: HTMLElement = null;

  constructor(private readonly el: HTMLElement) {
    // this.el = el;
  }

  public add(x: number, y: number): number {
    // this.el = null;
    const result = x + y;
    this.el.textContent = result.toString();
    return result;
  }

  subtract(x, y) {
    const result = x - y;
    this.el.textContent = result.toString();
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
  lastName: null as string
};

person.firstName = "Joe";

person.lastName = "lkdsd";

interface Sleepy {
  sleep();
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

function gotoSleep(animal: { sleep() }) {
  animal.sleep();
}

gotoSleep(dog);

function printFullName(o: { fistName: string; lastName: string }) {
  console.log(o.fistName + o.lastName);
}

printFullName({ fistName: "", lastName: "" });


interface DoStufffOption{
  x: number
  y: number
}

function doStuff(options: Partial<DoStufffOption>){

}


doStuff({x:1 , y:2})

doStuff({})


const x : number[]= [1]