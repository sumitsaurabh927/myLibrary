// testing JS wiring
// console.log('wired');

// book constructor
function bookMaker(name, author, numberOfPages, readStatus) {
        this.name = name;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.readStatus = readStatus;
        this.info = function () {
                return `${this.author} is the author of the book titled ${this.name}. It has ${this.numberOfPages} pages and its read status is ${this.readStatus}.`
        }
        this.getInfo = function () { return console.log(this.info()) }
}

const potterHead = new bookMaker('goblet of fire', 'j k rowling', 400, 'read');

// potterHead.getInfo();