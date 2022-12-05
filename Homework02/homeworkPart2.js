//Homework Part 2

var year = prompt("Enter what year are you born: ");
var calc = (year - 4) % 12;
var calculation = parseInt(calc)
console.log("Chinese Zodiac calculation: ");
console.log(calculation);


if (calculation < 12 && calculation == 0) {
    console.log("Your Chinese Zodiac is: RAT")
}
else if (calculation < 12 && calculation == 1) {
    console.log("Your Chinese Zodiac is: OX")
}
else if (calculation < 12 && calculation == 2) {
    console.log("Your Chinese Zodiac is: TIGER")
}
else if (calculation < 12 && calculation == 3) {
    console.log("Your Chinese Zodiac is: RABBIT")
}
else if (calculation < 12 && calculation == 4) {
    console.log("Your Chinese Zodiac is: DRAGON")
}
else if (calculation < 12 && calculation == 5) {
    console.log("Your Chinese Zodiac is: SNAKE")
}
else if (calculation < 12 && calculation == 6) {
    console.log("Your Chinese Zodiac is: HORSE")
}
else if (calculation < 12 && calculation == 7) {
    console.log("Your Chinese Zodiac is: GOAT")
}
else if (calculation < 12 && calculation == 8) {
    console.log("Your Chinese Zodiac is: MONKEY")
}
else if (calculation < 12 && calculation == 9) {
    console.log("Your Chinese Zodiac is: ROOSTER")
}
else if (calculation < 12 && calculation == 10) {
    console.log("Your Chinese Zodiac is: DOG")
}
else if (calculation < 12 && calculation == 11) {
    console.log("Your Chinese Zodiac is: PIG")
}
else {
    console.log("No such Chinese Zodiac!")
}

