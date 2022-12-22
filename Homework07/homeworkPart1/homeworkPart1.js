let animal = {
    name: prompt("What animal is it: "),
    kind: prompt("Enter the animal kind: "),
    speak: function (message){
     return console.log(`${this.name} says: ${message}`);
    }
}
animal.speak("Hey bro!!!");
