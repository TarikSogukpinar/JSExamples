for (let i = 0; i <= 10; i++) {
    console.log(i)
}

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        break;
        //continue
    }
    console.log(i)
}

let number = 1
while (number < 10) {
    console.log(number)
    number = number + 1;
}

let age = 10

let result = ""

do {
    result += age;
    result += "-";
} while (age > 0);
console.log(result)