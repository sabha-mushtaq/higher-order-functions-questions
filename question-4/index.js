const books = [
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", published: 2019 },
    { title: "1984", author: "George Orwell", published: 1949 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", published: 1960 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", published: 1954 },
    { title: "Pride and Prejudice", author: "Jane Austen", published: 1813 },
    { title: "The Adventures of Huckleberry Finn", author: "Mark Twain", published: 2011 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", published: 1925 },
    { title: "War and Peace", author: "Leo Tolstoy", published: 2017 },
    { title: "The Old Man and the Sea", author: "Ernest Hemingway", published: 1952 },
    { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez", published: 2015 }
];


const booksBefore2010 = books.filter(book => book.published < 2010);
const booksAfter2010 = books.filter(book => book.published >= 2010);


const capitalAuthors = [];
booksBefore2010.forEach(book => {
    capitalAuthors.push({ title: book.title, author: book.author.toUpperCase(), published: book.published });
});
booksAfter2010.forEach(book => {
    capitalAuthors.push({ title: book.title, author: book.author.toLowerCase(), published: book.published });
});

let myinput = document.querySelector('.typein');
let bookauthor = document.querySelector('.Author');
let date = document.querySelector('.Published');

myinput.addEventListener('input', function () {
    let inputText = myinput.value.trim().toLowerCase();
    let book = capitalAuthors.find(book => book.title.toLowerCase() === inputText);
    if (book) {
        bookauthor.textContent = book.author;
        date.textContent = book.published;
    } else {
        bookauthor.textContent = "";
        date.textContent = "";
    }
});


