const stringLength = require("./stringLength");

describe("stringLength", () => {
    test("returns the correct length of a string", () => {
        expect(stringLength("Hello, world!")).toBe(13);
        expect(stringLength("")).toBe(0);
        expect(stringLength("Lorem ipsum dolor sit amet")).toBe(26);
        expect(stringLength("1234567890")).toBe(10);
    });
    test("throws an error for an empty string", () => {
        expect(() => {
            stringLength("");
        }).toThrow("String must contain at least 1 character.");
    });

    test("throws an error for a string longer than 10 characters", () => {
        expect(() => {
            stringLength("This string is too long.");
        }).toThrow("String cannot exceed 10 characters.");
    });
});
