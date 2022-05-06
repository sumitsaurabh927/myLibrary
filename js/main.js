// testing JS wiring
// console.log('wired');
let parent = document.querySelector('.book');
let addBookBtn = document.querySelector('.addBookBtn');
let addBookForm = document.querySelector('.addBookForm');
let submitBtn = document.querySelector('.submitBtn');
let addBookName = document.querySelector('.bookName');
let addBookAuthor = document.querySelector('.bookAuthor');
let addBookPages = document.querySelector('.bookPages');
let addBookStatusYes = document.querySelector('.bookReadStatusYes');
let addBookStatusNo = document.querySelector('.bookReadStatusNo');

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



// array of books and a function to add to that array
let library = [];
const addToLibrary = (book) => library.push(book);

// random books to test thing out
const potterHead = new bookMaker('goblet of fire', 'j k rowling', 400, 'read');
addToLibrary(potterHead);
const winner = new bookMaker('you can win', 'Shiv Khera', 183, 'not read');
addToLibrary(winner);

// looping through the array
library.forEach(item => {

        // creating an element for each book 'item'
        let newBook = document.createElement('div');

        // creating elments for book's properties
        let newName = document.createElement('div');
        let newAuthor = document.createElement('div');
        let newPages = document.createElement('div');
        let newReadStatus = document.createElement('div');

        // updating properties of the book
        newName.innerText = item.name;
        newAuthor.innerText = item.author;
        newPages.innerText = item.numberOfPages;
        newReadStatus.innerText = item.readStatus;

        // adding new property divs to the parent newBook node
        newBook.appendChild(newName);
        newBook.appendChild(newAuthor);
        newBook.appendChild(newPages);
        newBook.appendChild(newReadStatus);


        // adding 'newBook' as a child to the 'book' div in HTML
        parent.appendChild(newBook);
})

// making the form show/hide on button click
addBookBtn.addEventListener('click', () => {
        addBookForm.classList.toggle('hide');
})

// submitting button action YO!!!
submitBtn.addEventListener('click', () => {
        let bookReadFlag = (addBookStatusYes.checked === true) ? addBookStatusYes.value : addBookStatusNo.value;

        let name = addBookName.value;
        let author = addBookAuthor.value;
        let pages = addBookPages.value;
        // console.log(bookReadFlag);
        let newBookObject = new bookMaker(name,author,pages,bookReadFlag)
        console.log(newBookObject);

        addToLibrary(newBookObject);

})