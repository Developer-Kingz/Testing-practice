const capitalize = require("./capitalize");

describe("capitalize", () => {
    test("capitalizes the first character of a string", () => {
        expect(capitalize("hello")).toBe("Hello");
        expect(capitalize("world")).toBe("World");
        expect(capitalize("openAI")).toBe("OpenAI");
        expect(capitalize("chatbot")).toBe("Chatbot");
    });
});
