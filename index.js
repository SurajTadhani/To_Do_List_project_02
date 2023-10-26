let todoList = [
    {items :'Buy Milk',duedate: '04/10/2023'},
    {items :'Go to College',duedate: '05/10/2023'},

];
displayitems()

function add(){
    let inputElement = document.querySelector("#todo-input");
    let dateElement = document.querySelector("#todo-date");
    let todoitems = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({items: todoitems,
        duedate : todoDate});
    
    inputElement.value = '';
    dateElement.value = '';
    displayitems()
}

function displayitems(){
    let containerelement = document.querySelector(".todo-container");
    let newhtml ='';

    for (let i = 0; i < todoList.length; i++) {
        // let items = todoList[i].items;
        // let duedate = todoList[i].duedate;
        let {items, duedate} = todoList[i];
        newhtml += `
       
        <span>${items}</span>
        <span>${duedate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i}, 1);
        displayitems();">Delete</button>
       
      `;
    }
    containerelement.innerHTML = newhtml;
}