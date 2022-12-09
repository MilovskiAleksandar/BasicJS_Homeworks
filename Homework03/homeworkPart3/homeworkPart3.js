function calculationDogHuman(dogAge, dog){
    let humanToDog = dogAge * 7;
    console.log(`Your dog's age is ${dogAge}. ${humanToDog} is the calculated age`);

    let dogToHuman = dog / 7;
    let result = Math.trunc(dogToHuman);
    console.log(`You are ${result} years old in dogs years`);
    
}
calculationDogHuman(10, 28);
