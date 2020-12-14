const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 300;

/*
Rewrite as arrow function below;
function summarizeUser(userName, userAge, userHasHobbies) {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ', and user Has some hobbies: ' +
        userHasHobbies
        );
*/

//Another way of doing it
/*const summarizeUser = function (userName, userAge, userHasHobbies) {
      return (
          'Name is ' +
          userName +
          ', age is ' +
          userAge +
          ', and user Has some hobbies: ' +
          userHasHobbies
          );
}*/

const summarizeUser = (userName, userAge, userHasHobbies)  => {
      return (
          'Name is ' +
          userName +
          ', age is ' +
          userAge +
          ', and user Has some hobbies: ' +
          userHasHobbies
          );
}



console.log(name);

console.log(summarizeUser(name, age, hasHobbies));


const add = (a,b) => {
  return a + b;
};
console.log(add(22 , 22));

/**
 *  const add = (a, b) => a + b; <-- same stuff!
 */

const addOne = (a) => a + 1;
/**
 * If you have only one argument u can eliminate parentesis.
 * const addOne = a => a + 1;
 */

console.log(addOne(1));

const addRandom = () => 1 + 9;

console.log(addRandom());
