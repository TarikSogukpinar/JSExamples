let message, x

try {
    if (x == "") {
        throw "is empty"
    }
    if (isNaN(x)) {
        throw "is not a number"
    }
    if (x => 10) {
        throw "is too high"
    }
    if (x < 5) {
        throw "is too low"
    }
} catch (error) {
    console.log(error)
}