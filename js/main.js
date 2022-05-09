// testing JS wiring
// console.log('wired');
let body = document.querySelector('body')
let parent = document.querySelector(".book");
let addBookBtn = document.querySelector(".addBookBtn");
let addBookForm = document.querySelector(".addBookForm");
let submitBtn = document.querySelector(".submitBtn");
let addBookName = document.querySelector(".bookName");
let addBookAuthor = document.querySelector(".bookAuthor");
let addBookPages = document.querySelector(".bookPages");
let addBookStatusYes = document.querySelector(".bookReadStatusYes");
let addBookStatusNo = document.querySelector(".bookReadStatusNo");

// book constructor
function BookMaker(name, author, numberOfPages, readStatus) {
        this.name = name;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.readStatus = readStatus;
        this.info = function () {
                return `${this.author} is the author of the book titled ${this.name}. It has ${this.numberOfPages} pages and its read status is ${this.readStatus}.`;
        };
        this.getInfo = function () {
                return console.log(this.info());
        };
}

// array of books and a function to add to that array
const library = [{ name: 'HP and the goble of fire', author: 'J K Rowling', numberOfPages: 845, readStatus: 'yes' }];

// function to push books to library array
const addToLibrary = (book) => {
        library.push(book);
        looper(library);
}


// looping through the library array
const looper = library => {

        library.forEach((item) => {
                // creating an element for each book 'item'
                let newBook = document.createElement("div");

                // creating elments for book's properties
                let newName = document.createElement("div");
                let newAuthor = document.createElement("div");
                let newPages = document.createElement("div");
                let newReadStatus = document.createElement("div");

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

                // clearing 'book' div in HTML which will re-populated below
                // parent.removeChild(newBook)
                // console.log('running')
                // if(parent.innerText){
                //         console.log('non empty')
                //         parent.innerHTML =""
                // }


                // adding 'newBook' as a child to the 'book' div in HTML
                parent.appendChild(newBook);
        });
}
looper(library);



// submitting button action YO!!!
submitBtn.addEventListener("click", () => {
        let bookReadFlag =
                addBookStatusYes.checked === true
                        ? addBookStatusYes.value
                        : addBookStatusNo.value;

        let name = addBookName.value;
        let author = addBookAuthor.value;
        let pages = addBookPages.value;
        let newBookObject = new BookMaker(name, author, pages, bookReadFlag);
        // console.table(newBookObject);
        // console.log(library)

        // emptying html div with class 'book'
        parent.innerHTML = ""

        // adding book to library
        addToLibrary(newBookObject);
});

// making the form show/hide on button click
addBookBtn.addEventListener("click", () => {
        addBookForm.classList.toggle("hide");
});