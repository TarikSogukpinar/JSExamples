function sendEmail(personInterface) {
    let to = personInterface.email;
    let name = personInterface.name;

    var send = function () {
        name + to
    }
    send()
}

function Customer(name, email) {
    this.name = name;
    this.email = email;
}

function Employee(name, email) {
    this.name = name;
    this.email = email;
}


var someCustomer = new Customer("Engin", "engin@engin.com")
var someEmployee = new Employee("tarık", "tarık@tarık.com")
sendEmail(someCustomer);
sendEmail(someEmployee);