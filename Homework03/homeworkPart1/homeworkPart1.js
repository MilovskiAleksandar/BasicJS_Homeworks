let year = prompt("Enter what year are you born: ");
let calc = parseInt(year);
let calculation = (calc - 4) % 12;
console.log("Chinese Zodiac calculation: ");
console.log(calculation);

switch (calculation) {
    case 0:
        alert("Your Chinese Zodiac is: RAT")
        break;
    case 1:
        alert("Your Chinese Zodiac is: OX")
        break;
    case 2:
        alert("Your Chinese Zodiac is: TIGER")
        break;
    case 3:
        alert("Your Chinese Zodiac is: RABBIT")
        break;
    case 4:
        alert("Your Chinese Zodiac is: DRAGON")
        break;
    case 5:
        alert("Your Chinese Zodiac is: SNAKE")
        break;
    case 6:
        alert("Your Chinese Zodiac is: HORSE")
        break;
    case 7:
        alert("Your Chinese Zodiac is: GOAT")
        break;
    case 8:
        alert("Your Chinese Zodiac is: MONKEY")
        break;
    case 9:
        alert("Your Chinese Zodiac is: ROOSTER")
        break;
    case 10:
        alert("Your Chinese Zodiac is: DOG")
        break;
    case 11:
        alert("Your Chinese Zodiac is: PIG")
        break;
    default:
        alert("No such Chinese Zodiac!") 
        break;

}