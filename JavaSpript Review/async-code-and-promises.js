//How to work with Asyncronous CODE!!


const fetchData = callback => {
  setTimeout(() => {
    callback('Done!');
  }, 1500);
};


//Async conde below!
/*
setTimeout(() => {
    console.log('Time is done!!');
    //nested async funcion
    fetchData(text => {
        console.log(text)
    })
}, 2000);

*/

//Example of Syncronous code.
console.log('Hello');
console.log('World!');


const fetchDataWithPrimise = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Time is done!!');
    //nested async funcion
    fetchDataWithPrimise().then(text => {
        console.log(text)
        return fetchDataWithPrimise();
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2000);
