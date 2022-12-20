let inputUser = parseInt(prompt("Enter weight in kilograms to calculate in chicken: "))
let paragraph = document.createElement("p");
function calcWeights (input){
    let calculation = input / 0.5;
    console.log(calculation);
    let myDiv = document.getElementById("first");
    myDiv.innerText += `You have ${calculation} chickens`
    
    
}
calcWeights(inputUser);
