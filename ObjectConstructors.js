
//This in a function inside an object

var student = {
    firstName: "Engin",
    lastName: "Demiroğ",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

console.log(student.fullName())

//Object constructor
//this in a object

function Customer(first, last, city, country, age) {
    this.first = first;
    this.last = last,
        this.city = city,
        this.age = age,
        this.country = country;
}

let someCustomer = new Customer("Tarık", "Soğukpınar", "İstanbul", "Turkey", 30);

console.log(someCustomer)