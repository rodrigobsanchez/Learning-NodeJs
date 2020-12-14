const person = {
    name: 'Max',
    age: 20,
    greet() {
        console.log('Hi i am ' + this.name);
    }
};

//const hobbies = ['Sports', 'Cooking', 1, true, {}] last one is object type;

const hobbies = ['Sports', 'Cooking', 'Anoteher 123', 'Another 2', 'Another3'];

//example of forEach at javascript
for (let hobby of hobbies){
    console.log(hobby);
}


console.log(hobbies.map(hobby => {
    return 'Hobby --> ' + hobby;
}));

//OR

console.log(hobbies.map(hobby => 'Hobby --> '+ hobby));

console.log(hobbies);




/**
 * This case i can change the hobbies array respecting the rules of 'const' variables.
 **/

hobbies.push('I WAS PUSHED INTO THIS ARRAY');

console.log(hobbies);

