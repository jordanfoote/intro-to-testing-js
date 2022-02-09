// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return the boolean value of true when executed', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return the boolean value of true when executed', function() {
        expect(isFive("5")).toBe(true);
    });
});

describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return the boolean value of true when executed', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return the boolean value of true when executed', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return the boolean value of false when executed', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return the boolean value of false when executed', function () {
        expect(isEven("bananas")).toBe(false);
    });
    it('should return the boolean value of true when executed', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return the boolean value of false when executed', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return the boolean value of false when executed', function () {
        expect(typeof isEven(true)).toBe('boolean');
    });
    it('should return the boolean value of false when executed', function () {
        expect(isEven()).toBe(false);
    });
});

describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true when input is "a"', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when input is "A"', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when input is "y"', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when input is 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when input is a boolean value', function () {
        expect(typeof isVowel(true)).toBe('boolean');
    });
    it('should return false when input is "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when input is undefined', function () {
        expect(isVowel()).toBe(false);
    });
});

describe('add', function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return 5 when inputs are 2 & 3', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 when inputs are -3 & -9', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 11 when inputs are "5" & 6', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 when inputs are "-4" & "10"', function () {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN when inputs are "banana" & "split"', function () {
        expect(add("banana", "split")).toBe(isNaN());
    });
    it('should return NaN when inputs are 2 & "apples"', function () {
        expect(add(2, "apples")).toBe(isNaN());
    });
    it('should return NaN when inputs are undefined', function () {
        expect(add()).toBe(isNaN());
    });
});