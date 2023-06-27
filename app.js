console.log("PROJECT:\n==========\n");

class Book {
  constructor(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = Boolean(read);
  }
}
class Library {
  constructor() {
    this.count = 0;
    this.bookList = [];
  }
  markRead(checkbox, id) {
    let bookTitle = title.id;
    let bookAuthor = author.id;
    let bookPages = pages.id;
    let bookRead;
    if (title.value == value && checkbox.checked) {
      bookRead = Boolean(true);
    } else {
      bookRead = Boolean(false);
    }
  }
  addBook(book) {
    this.bookList.push(book);
    this.count++;
  }
}

let lib = new Library();
//README.md lines 36 - on, I have no clue what I'm doing.

var x = document.createElement("TABLE");
let TABLE = [{ name: "Title" }, { name: "Author" }, { name: "Read" }];

document.getElementById("submit").addEventListener("click", displayDate);
document.getElementById("myform").addEventListener("submit", addbookhelper);

function displayDate() {
  // document.getElementById("demo").innerHTML = Date();
  console.log("displaydate");
}

function addbookhelper(event) {
  event.preventDefault();
  let userTitle = document.getElementById("title").value;
  let userAuthor = document.getElementById("author").value;
  let userRead = document.getElementById("read").checked;
  console.log(userTitle);
  console.log(userAuthor);
  console.log(userRead);
  let mynewbook = new Book(userTitle, userAuthor, userRead);
  lib.addBook(mynewbook);
  console.log("HIYA!!!!");
}
