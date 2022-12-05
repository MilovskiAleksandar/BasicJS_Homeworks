var first = prompt("Enter first number: ");
var second = prompt("Enter second number: ");
var third = prompt("Enter third number: ");
var fourth = prompt("Enter fourth number: ");
var fifth = prompt("Enter fifth number: ");

var firstNum = parseInt(first);
var secondNum = parseInt(second);
var thirdNum = parseInt(third);
var fourthNum = parseInt(fourth);
var fifthNum = parseInt(fifth);

if (firstNum > secondNum && firstNum > thirdNum && firstNum > fourthNum && firstNum > fifthNum) {
    alert(`Maximum number is: ${firstNum}`)
}
else if (secondNum > firstNum && secondNum > thirdNum && secondNum > fourthNum && secondNum > fifthNum) {
    alert(`Maximum number is: ${secondNum}`)
}
else if (thirdNum > firstNum && thirdNum > secondNum && thirdNum > fourthNum && thirdNum > fifthNum) {
    alert(`Maximum number is: ${thirdNum}`)
}
else if (fourthNum > firstNum && fourthNum > secondNum && fourthNum > thirdNum && fourthNum > fifthNum) {
    alert(`Maximum number is: ${fourthNum}`)
}
else if (fifthNum > firstNum && fifthNum > secondNum && fifthNum > thirdNum && fifthNum > fourthNum) {
        alert(`Maximum number is: ${fifthNum}`)
}
else {
        alert("They are all equal!")
} 