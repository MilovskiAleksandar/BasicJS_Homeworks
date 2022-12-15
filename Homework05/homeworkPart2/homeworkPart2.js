let inputArray = [2, 5, 1, 5, 7, 8, 9, 5, 2, 9, 8, 9, 9];
function findNumber(array, number){
    let counter = 0;
    for(num of array){
        if(num == number){
            counter++;
        }
    }
    console.log(`There is ${counter} occurences of number ${number} in the array`);
}
findNumber(inputArray, 2);
findNumber(inputArray, 5);
findNumber(inputArray, 9);