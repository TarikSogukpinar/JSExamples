function Customer(firstName, lastName) { //constructor
    this.firstName = firstName; //public 
    this.lastName = lastName;

    let someField = "some value"; //private

    this.sendProduct = function () { //operation
        console.log("Product sent!");
    }

};


let engin = new Customer("Engin", "Demiroğ")
engin.sendProduct();