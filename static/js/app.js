{/* < li class="list-group-item active" > Active item</li > */}
{/* <li class="list-group-item">Item</li> */}

let form = document.querySelector('#todoForm');
let ul = document.querySelector('#todoList');
// console.log(form)

form.addEventListener('submit', e => {
    // turn off page refresh
    e.preventDefault();

    // create the element first
    let li = document.createElement('li');

    // add a class to list element
    li.classList.add('list-group-item');

    // set inner text to the input field value's text
    li.innerText = e.target.todoItemInput.value;

    // // add event listeners
    li.addEventListener('mouseenter', (e) => li.classList.add('active'));

    li.addEventListener('mouseleave', e => li.classList.remove('active'));

// override class and set pointer events to all (in css). CSS can effect JS and vice versa
// set a conditional for the toggle

    li.addEventListener('click', (e) => {
        if(li.classList.contains('disabled')){
            li.classList.remove('disabled');
            li.classList.add('active');
            li.style.textDecoration = 'none';
        } else if(li.classList.contains('active')) {
            li.classList.remove('active');
            li.classList.add('disabled');
            li.style.textDecoration = 'line-through'
        }
        console.log("sup")
    })

        
        
        
    
    // pass list element into the unordered list
    ul.appendChild(li)

    // clear text from input field
    e.target.todoItemInput.value = '';
})
// query selector to target this button by ID
let clearbutton = document.querySelector('#clear');
clearbutton.addEventListener('click', e => {
    e.preventDefault();
    ul.innerHTML = "";
})




