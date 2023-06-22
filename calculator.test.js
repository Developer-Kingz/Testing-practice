const Calculator = require("./calculator");

describe("Calculator", () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    describe("add", () => {
        test("adds two positive numbers correctly", () => {
            expect(calculator.add(5, 3)).toBe(8);
        });

        test("adds a positive and a negative number correctly", () => {
            expect(calculator.add(-5, 3)).toBe(-2);
        });

        test("adds two negative numbers correctly", () => {
            expect(calculator.add(-5, -3)).toBe(-8);
        });
    });

    describe("subtract", () => {
        test("subtracts two positive numbers correctly", () => {
            expect(calculator.subtract(10, 4)).toBe(6);
        });

        test("subtracts a positive and a negative number correctly", () => {
            expect(calculator.subtract(5, -3)).toBe(8);
        });

        test("subtracts two negative numbers correctly", () => {
            expect(calculator.subtract(-10, -4)).toBe(-6);
        });
    });

    describe("divide", () => {
        test("divides two positive numbers correctly", () => {
            expect(calculator.divide(15, 3)).toBe(5);
        });

        test("throws an error when dividing by zero", () => {
            expect(() => {
                calculator.divide(10, 0);
            }).toThrow("Cannot divide by zero.");
        });

        test("divides a positive number by a negative number correctly", () => {
            expect(calculator.divide(15, -3)).toBe(-5);
        });
    });

    describe("multiply", () => {
        test("multiplies two positive numbers correctly", () => {
            expect(calculator.multiply(2, 6)).toBe(12);
        });

        test("multiplies a positive and a negative number correctly", () => {
            expect(calculator.multiply(-2, 6)).toBe(-12);
        });

        test("multiplies two negative numbers correctly", () => {
            expect(calculator.multiply(-2, -6)).toBe(12);
        });
    });
});
