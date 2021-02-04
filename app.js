//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//functions
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();

    //Todo DIV
    const todoDIV = document.createElement('div');
    todoDIV.classList.add('todo');

    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    //append li within div
    todoDIV.appendChild(newTodo);

    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"> </i>';
    completedButton.classList.add('completed-btn');
    todoDIV.appendChild(completedButton);

    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"> </i>';
    deleteButton.classList.add('delete-btn');
    todoDIV.appendChild(deleteButton);

    //append to the html div
    todoList.appendChild(todoDIV);

    //clear input value
    todoInput.value = "";

    //delete the checklist
}

function deleteCheck(e){

    const item = e.target;

    if( item.classList[0] == "delete-btn" ){
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
        
    }

    //check mark

    if( item.classList[0] == "completed-btn" ){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}