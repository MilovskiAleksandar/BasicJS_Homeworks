function sumOfSquares(){
    let sum = 0
   for(let num = 101; num <= 150; num++){
        sum += Math.pow(num, 2);
   }
   return sum;
   
}
console.log(sumOfSquares());