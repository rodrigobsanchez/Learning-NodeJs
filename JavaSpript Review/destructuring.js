const person = {
    name: 'Max',
    age: 20,
    greet() {
        console.log('Hi i am ' + this.name);
    }
};

const printName = (person) => {
    console.log(person.name);
};

printName(person);

//destructiong syntax;;;
const anotherWay = ({name, age}) => {
    console.log(name, age);
};

anotherWay(person);

const { name, age} = person; //create two const for each object attribute.
console.log(name, age);
