$(document).ready(function(){

    let button = $("#btn");

    button.click(function(){

        $.ajax({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/todos",
            success: function(result){
                result.forEach(function (todo){
                    console.log("ID: " + todo.id + " Title: " + todo.title + (todo.completed ? " Completed" : " Not Completed"));
                });
            },
            error: function(){
                console.log("ERROR", error)
            }
        })
    })
})