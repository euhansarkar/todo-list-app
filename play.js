// title: To-Do app
//Description: it's a simple to-do app. where you can create a todo list and complete todo items and delete it.
//author: @euhansarkar
//Date: 16-05-2022

//let catch the references
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

//functions 
let createTask = function(task){
      let listItem = document.createElement('li');
      let inputCheckbox = document.createElement('input');
      let label = document.createElement('label');
      label.innerText = task;
      inputCheckbox.type = 'checkbox';
      listItem.appendChild(checkbox);
      listItem.appendChild(label);

      return listItem;
}

let addTask = function(event){
      event.preventDefault(); 
      let listItem = createTask(newTask.value);
      todoUl.appendChild(listItem);
      newTask.value = '';
      //bind the new list item to the incomplete list
      bindIncompleteItems(listItem, completeTask);
}

let completeTask = function(){
      let listItem = this.parentNode;
      let deleteBtn = document.createElement('button');
      deleteBtn.innerText = 'Delete';
      deleteBtn.className = 'delete';
      listItem.appendChild(deleteBtn);

      let checkBox = listItem.querySelector('input[type="checkbox"]');
      checkBox.remove();
      completeUl.appendChild(listItem);
      bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function(){
      let listItem = this.parentNode;
      let ul = listItem.parentNode;
      ul.removeChild(listItem);
}


let bindIncompleteItems = function(taskItem, checkboxClick){
      let checkbox = taskItem.querySelector('input[type="checkbox"]');
      checkbox.onchange = checkboxClick;
}

let bindCompleteItems = function(taskItem, deleteButtonClick){
      let deleteButton = taskItem.querySelector('.delete');
      deleteButton.onclick = deleteButtonClick;
}

form.addEventListener('submit', addTask)