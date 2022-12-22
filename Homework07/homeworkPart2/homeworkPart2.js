let statusBook = {
    title: prompt("Enter the book: "),
    author: prompt("Enter the author: "),
    readingStatus: prompt("Have you read the book? Enter true or false!"),
    readingStatusInfo: function (){
        if(this.readingStatus == "true"){
            console.log(`Already read: ${this.title} by ${this.author}`)
        } else {
            console.log(`You still need to read: 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.`);
        }
    }
}
statusBook.readingStatusInfo();