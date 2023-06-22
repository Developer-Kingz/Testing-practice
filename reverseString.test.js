const reverseString = require("./reverseString");

describe("reverseString", () => {
    test("returns the reversed string", () => {
        expect(reverseString("Hello, world!")).toBe("!dlrow ,olleH");
        expect(reverseString("OpenAI Chatbot")).toBe("tobahC IAnepO");
        expect(reverseString("12345")).toBe("54321");
    });
});
