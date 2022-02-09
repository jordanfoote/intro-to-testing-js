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