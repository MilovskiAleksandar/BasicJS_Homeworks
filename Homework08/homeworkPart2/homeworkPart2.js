$(document).ready(function () {

    let button = $("button").first();
    button.on("click", function () {
        let firstInput = $("#firstInput").val();
        let colorInput = $("#colorInput").val();

        if (firstInput != "" && colorInput != "") {
            $("#result").text(firstInput).css("color", colorInput);

        } else {
            $("#result").text("Please enter text and a color");
        }
       
        $("#firstInput").val('')
        $("#colorInput").val('')
    })
})