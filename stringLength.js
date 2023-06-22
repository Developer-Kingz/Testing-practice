function stringLength(string) {
    if (string.length === 0) {
        throw new Error("String must contain at least 1 character.");
    }

    if (string.length > 10) {
        throw new Error("String cannot exceed 10 characters.");
    }

    return string.length;
}
module.exports = stringLength;
