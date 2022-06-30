function Customer(first, last, city, country, age) {
    this.first = first;
    this.last = last,
        this.city = city,
        this.age = age,
        this.country = country;
}


let someCustomer = new Customer("Tarık", "Soğukpınar", "İstanbul", "Turkey", 30);

Customer.prototype.email = "tarık@tarık.net"

Customer.prototype.fullName = function () {
    return this.first + " " + this.last;

};

console.log(someCustomer.email)