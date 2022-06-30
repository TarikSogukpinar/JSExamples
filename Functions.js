function functionName(parameter1, parameter2) {
    return parameter1 * parameter2;
}

console.log(functionName(2, 3))

function functionWihtOutReturn(parameter1, parameter2) {
    console.log('This is a function without return statment');
}

functionWihtOutReturn(2, 3, 4)


function functionName2(x, y) {
    if (y === undefined) {
        y = 0;
    }
}

functionName2(3)

x = findMax(1, 123, 500, 115, 44, 88)

function findMax() {
    var i, max = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }

    }
    return max;
}