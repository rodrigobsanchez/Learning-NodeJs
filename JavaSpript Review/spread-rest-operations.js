//Copying an array...

const hobbies = ['Sports', 'Cooking', 'Anoteher 123', 'Another 2', 'Another3'];


const copiedArray = hobbies.slice();  //it is a deep copy!!! very nice

console.log(copiedArray);

//spread operator!!!
const copiedArraySpread = [...hobbies]; //copying with spread operator ('...')

console.log(copiedArraySpread);


const person = {
    name: 'Max',
    age: 20,
    greet() {
        console.log('Hi i am ' + this.name);
    }
};

const copiedPerson = {...person};
console.log(copiedPerson);

//simple examples...not flexible.. limited number of arguments.
const toArray = (args1, args2, args3) => {
    return [args1, args2, args3];
};
//REST operator
const toArrayRest = (...args) => {
    return args;
};
console.log(toArrayRest(1,2,3,4,5,6,7));

console.log(toArray(1,2,3));



