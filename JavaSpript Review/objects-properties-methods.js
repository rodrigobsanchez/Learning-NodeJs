const person = {
   name: 'Max',
   age: 20,
   /*greet: () => {
       console.log('Hi i am ' + this.name); //this.name = undefined.
   }*/
    greet() {
        console.log('Hi i am ' + this.name);
    }
};


person.greet();
console.log(person);

