let num = [34, 8, 100, 7, 45, 12, 22, 2, 33, 77, 14, 15];
let numbers = [34, 5, 9, 7, 45, 12, 89, 6, 33, 77];
function minMax(input) {
    let counter = 0;
    let max = input[0];
    let min = input[0];
    while (counter < input.length) {
        if (input[counter] > max) {
            max = input[counter];
        }
        
        if (input[counter] < min) {
            min = input[counter];
        }
        counter++;
    }
    console.log(`The max number is: ${max}`);
    console.log(`The min number is: ${min}`);

    let sum = max + min;
    console.log(`The sum of the min and max is: ${sum}`);
}
minMax(num);
minMax(numbers);