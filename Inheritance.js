function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

function Student(favoriteCourse){
    this.favoriteCourse = favoriteCourse;
};

Student.prototype = new Person("Engin", "Demiroğ");

var engin = new Student("Programming")