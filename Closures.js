function add() {
    let counter = 0;
    counter += 1;
    return counter;
};

function someOtherFunction() {
    counter += 10;
};

let add = (function () {
    let counter = 0;
    return function () {
        return counter += 1
    }
})();