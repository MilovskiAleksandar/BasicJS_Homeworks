let button = document.getElementById("btn");

button.addEventListener("click", function(){

    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => {
        response.json()
            .then(todos => {
                todos.forEach(function(todo) {
                    console.log("ID: " + todo.id + " Title: " + todo.title + (todo.completed ? " Completed" : " Not Completed"));
                });
            })
    })
   
}) 
