function calculationDogHuman(){
    let dogAge = parseInt(prompt("Enter human years: "))
    let humanToDog = dogAge * 7;
    console.log(`Your dog's age is ${dogAge}. ${humanToDog} is the calculated age`);
    
    let dog = parseInt(prompt("Enter dog years to convert it in human years: "))
    let dogToHuman = dog / 7;
    let result = Math.trunc(dogToHuman);
    console.log(`You are ${result} years old in dogs years`);
    
}
calculationDogHuman();
