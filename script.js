let input = document.getElementById("input");
let todos = []

showTodos();

function showTodos(){
    let html = "";
    todos.forEach((todo, index)=>{
        html += 
        `<div class="card m-3">
            <div class="card-body d-flex justify-content-start">
                <div>
                    <input class="form-check-input m-1 checkbox" type="checkbox" onclick="checkTodo(this.id.replace('checkbox',''))" id="checkbox${index}">
                </div>
            <div class="ms-2 w-100" id="todo${index}">${todo.todo}</div>
            <div><button type="button" class="btn-close" onclick="clearTodo(this.id.replace('clear',''))"  id="clear${index}"></button></div>
            </div>
        </div>`;
    });

    if(todos.length == 0){
        document.getElementById("todo-container").innerHTML = `<div class="alert alert-primary text-center m-3" role="alert">
        Nothing to show here, Try adding some todos.
    </div>`;
        document.getElementById("clearAll").style.display = "none";
    }else{
        document.getElementById("todo-container").innerHTML = html;
        document.getElementById("clearAll").style.display = "block";
    }

    for(let i = 0; i < todos.length; i++){
        let todo = todos[i];
        document.getElementById(`checkbox${i}`).checked = todo.isDone;
        if(todo.isDone){
            document.getElementById(`todo${i}`).classList.add("text-decoration-line-through");
        }else{
            document.getElementById(`todo${i}`).classList.remove("text-decoration-line-through");
        }
    }
}

function checkTodo(index){
    let value = !todos[index].isDone;
    todos[index].isDone = value;
    showTodos();
}

function clearTodo(index){
    todos.splice(index, 1);
    showTodos();
}

document.getElementById("add").addEventListener("click", ()=>{
    let todo = input.value;
    if(todo != ""){
        let newTodo = {
            todo: todo,
            isDone: false
        }
        todos.push(newTodo);
        input.value = "";
        showTodos();
    }
})

document.getElementById("clearAll").addEventListener("click", function(){
    todos = [];
    showTodos();
});