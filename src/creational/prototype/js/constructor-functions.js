/* eslint-disable */

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

const personPrototype = {
    firstName: "Luiz",
    lastName: "Miranda",
    age: 30,
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function OtherPerson(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);
    this.fromOtherClass = "OI";
}

OtherPerson.prototype = Object.create(Person.prototype);
OtherPerson.prototype.constructor = OtherPerson;

const person1 = new Person("João", "Mirando", 30);
console.log(person1);
console.log(person1.fullName());

const person2 = new OtherPerson("Helena", "Vieira", 20);
console.log(person2);
console.log(person2.fullName());
