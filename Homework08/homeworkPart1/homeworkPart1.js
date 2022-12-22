$(document).ready(function(){
    let button = $("button").first();
    

    button.on("click", function(){
        let input = $("#oneInput").val();
        $("#header").text(`Hello there ${input}`);
    })


})