const personPrototype = {
  firstName: 'Kailian',
  lastName: 'Serk',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);

console.log(anotherPerson);
console.log(anotherPerson.fullName());
