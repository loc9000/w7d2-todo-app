// console.log('Hello Todo Application');

// console.log(document)

// Access elements by classname
// let listItems = document.getElementsByClassName('list-group-item'); // will return an HTMLCollection object
let listItems = document.querySelectorAll('.list-group-item'); // will return an NodeList object
// console.log(listItems)

// .forEach() => only usable for regular JavaScript arrays and NodeList objects

// listItems.forEach(function( listItem, idx ) {
//     // console.log(idx, listItem)

//     // set HTML content inside of an element
//     listItem.innerHTML = `<strong>${ listItem.innerHTML }</strong>`

//     listItem.innerHTML = `
//         <p>
//             <strong>
//                 ${ listItem.innerHTML }
//                 <span class="float-right">This is a test</span>
//             </strong>
//         </p>
//     `
// });

// for (const listItem of listItems) {
    // console.log(listItem.innerText);
    
    // set HTML content inside of an element
    // listItem.innerHTML = `<strong>${ listItem.innerHTML }</strong>`

    // listItem.innerHTML = `
    //     <p>
    //         <strong>
    //             ${ listItem.innerHTML }
    //             <span class="float-right">This is a test</span>
    //         </strong>
    //     </p>
    // `
    
    // console.log(listItem);
// }

// Access elements by id
let titleElement = document.getElementById('title');
// console.log(titleElement.innerText);

// set an attribute of an element
// titleElement.innerText = 'This is a Test. Does this work??'

// Access elements by element name
let horizantalRules = document.getElementsByTagName('hr');
// console.log(horizantalRules);

// Access elements using a wildcard method
let form = document.querySelector('#todoForm');
// console.log(form)

let todoInputField = document.querySelector('#todo-input-field');
// console.log(todoInputField.value)

form.addEventListener('submit', function(e) {
    // turn off form submission
    e.preventDefault();
    // console.log(e);
    console.log(e.target.todoItemInput.value);
})