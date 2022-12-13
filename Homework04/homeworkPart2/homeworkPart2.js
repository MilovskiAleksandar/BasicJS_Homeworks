let num = [10, 15, 34, 5, 67];
function numFunction(arrayNum) {
    let result = arrayNum[0] + arrayNum[1] + arrayNum[2] + arrayNum[3] + arrayNum[4];
    return result;
}

function validateNumber(input) {

    if (isNaN(input[0]) === true) {
        return console.log("ERROR you entered something that is not number(In first number)!!")
    }
    else if (isNaN(input[1]) === true) {
        return console.log("ERROR you entered something that is not number(In second number!!")
    }
    else if (isNaN(input[2]) === true) {
       return console.log("ERROR you entered something that is not number(In third number)!!")
    }
    else if (isNaN(input[3]) === true) {
       return console.log("ERROR you entered something that is not number(In fourth number)!!")
    }
    else if (isNaN(input[4]) === true) {
       return console.log("ERROR you entered something that is not number(In fifth number)!!")
    }
    else {
        console.log(numFunction(input));
        
    }


}
validateNumber(num);
