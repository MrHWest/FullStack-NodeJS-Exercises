function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

const getRandomIntArrowFunctionOneLiner = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

// Callback function
// The call to genericAction happens concurrently(?)
// "executable code that is passed as an argument to another piece of code"
function genericActionPerformer(name, genericAction) {
    return genericAction(name);
}

const running = (name) => `${name} is running`;

// Write code below so that the console logs "Alex is running"

const runningResult = genericActionPerformer("Alex", running);
console.log(runningResult);

// Create a single line that prints "Louis is eating"

console.log(genericActionPerformer("Louis", (name) => `${name} is eating`));