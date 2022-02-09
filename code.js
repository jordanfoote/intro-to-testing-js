// helloWorld function 
const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(input) {
    if (typeof input !== "string") {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(num) {
    if (num === 5 || num === "5") {
        return true;
    } else {
        return false;
    }
}

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else if (typeof number === 'boolean') {
        return false;
    } else {
        return false;
    }
}

function isVowel(letter) {
    if (typeof letter != 'string') {
        return false;
    } else if (letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' || letter.toLowerCase() === 'i' || letter.toLowerCase() === 'o' || letter.toLowerCase() === 'u') {
        return true;
    } else {
        return false;
    }
}

function add(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return isNaN();
    } else {
        return parseInt(num1) + parseInt(num2);
    }
}