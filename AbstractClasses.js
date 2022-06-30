let Person = {
    name: "None",
    email: "None",
    sendEmail: function () {
        this.name + this.email
    },
};

function Customer(name, email) {
    this.name = name;
    this.email = email;
}

function Employee(name, email) {
    this.name = name;
    this.email = email;
}

Customer.prototype = Person;
let someCustomer = new Customer("Engin", "engin@gmail.com")
someCustomer.sendEmail();

Employee.prototype = Person;
let someEmployee = new Employee("Engin", "engin@gmail.com")
someEmployee.sendEmail();
