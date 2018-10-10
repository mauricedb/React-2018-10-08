import Calculator from "./Calculator";
let calc;

describe("The calculator", () => {
  beforeEach(() => {
    calc = new Calculator();
  });

  describe("can add", () => {
    test("1 + 1", () => {
      const sum = calc.add(1, 1);
      expect(sum).toBe(2);
    });

    test("1 + 2", () => {
      const calc = new Calculator();
      const sum = calc.add(1, 2);
      expect(sum).toBe(3);
    });
  });

  describe("can subtract", () => {
    test("can subtract 1 - 1", () => {
      const sum = calc.subtract(1, 1);
      expect(sum).toBe(0);
    });
  });

  test("matches", () => {
    expect({ x: 1 }).toEqual({ x: 1 });
    expect([{ x: 1 }]).toEqual([{ x: 1 }]);
  });
});
