// function printName(a_string) {
// let printName = function(a_string) {
//     console.log(`Hello, ${ a_string }`);
// }

// function printName() {
//     let name = 'Lucas'
//     console.log(`Hello, ${ name }`);
// }

// let printName = (a_string) => console.log(`Hello, ${ a_string }`)

// let name = 'Lucas'
// let printName = () => console.log(`Hello, ${ name }`)

// if passing in one parameter
// let printName = a_string => console.log(`Hello, ${ a_string }`);

// if passing in more than one parameter
// let printName = (firstName, lastName) => console.log(`Hello, ${ firstName } ${ lastName }`);

// multiline arrow function
// let printName = (firstName, lastName) => { console.log(`Hello, ${ firstName }`); console.log(`${ lastName }`) }
let printName = (firstName, lastName) => { 
    console.log(`Hello, ${ firstName }`) 
    console.log(`${ lastName }`) 
}

printName('Lucas', 'Lang');
// printName();