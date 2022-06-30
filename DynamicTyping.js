let customer = {
    id: 1,
    contactName: "Engin Demiroğ"
}

customer.country = "Turkey"

customer.sayHello = function () {
    console.log(customer.country)
}

customer.sayHello()