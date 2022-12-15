let input = [2, 4, 6, 5, 7, 10, 11, 15, 50, 51, 105];

function findNumber(inputArray, type) {
    for (let num of inputArray)
        if (type == "Even" && num % 2 == 0) {
            console.log(`Even numbers are: ${num}`);
        } else if (type == "Odd" && num % 2 != 0) {
            console.log(`Odd number are: ${num}`);
        }


}
findNumber(input, "Even");
findNumber(input, "Odd");
