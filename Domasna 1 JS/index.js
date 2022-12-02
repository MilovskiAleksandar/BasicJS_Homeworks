//number
var a = 50;
console.log(a);
console.log(typeof(a));

var secA = 160.55;
console.log(secA);
console.log(typeof(secA));

//string
var b = "Aleksandar";
console.log(b);
console.log(typeof(b));

var secB = "155";
console.log(secB);
console.log(typeof(secB));

//boolean
var c = true;
console.log(c);
console.log(typeof(c));

var bool = false;
console.log(bool);
console.log(typeof(bool));


//circle
console.log("Area of circle: ");
var pi = 3.141592654;
var r2 = prompt("You can calculate area of the circle.\n Enter number for r2: ");
sideR2 = parseInt(r2);
var area = pi * sideR2;
console.log(area);
console.log(typeof(area));

//phones
var phone = prompt("Here you can buy any amount of phones.\n Enter how many phones do you want: ");
var price = 119.95;
var tax = prompt("Enter tax rate : ");
//change string to number
numPhone = parseInt(phone);
numTax = parseInt(tax);
console.log("Phone price: ");
sum = numPhone * price; //total price for buying phones
console.log(sum);

console.log("Tax: ");
totalTax = (sum * numTax) /100; //total tax for buying phones
console.log(totalTax);

console.log("Price after the tax(calculated): ");
afterTax = sum + totalTax; //calculated tax + total sum
console.log(afterTax);



