console.log("PROJECT:\n==========\n");

class Book {
  constructor(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = Boolean(read);
  }
}

let Library = [];
let counter = 0;

function markRead(checkbox, value) {
  let bookTitle = title.value;
  let bookAuthor = author.value;
  let bookPages = pages.value;
  let bookRead;
  if (title.value == value && checkbox.checked) {
    bookRead = Boolean(true);
  } else {
    bookRead = Boolean(false);
  }
}

function addBook(book) {
  Library.push(book);
}

//README.md lines 36 - on, I have no clue what I'm doing.

var x = document.createElement("TABLE");
let TABLE = [{ name: "Title" }, { name: "Author" }, { name: "Read" }];

document.getElementById("submit").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
