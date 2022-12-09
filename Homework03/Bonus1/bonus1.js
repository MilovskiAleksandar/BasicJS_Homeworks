function calculateAge(birthYear){
    let date = new Date().getFullYear();
    let calc = date - birthYear;
    console.log(`You are ${calc} years old!`);
}
calculateAge(1932);
calculateAge(1940);
calculateAge(2002);