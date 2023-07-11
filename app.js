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
var x = document.createElement("TABLE");
let TABLE = [{ name: "Title" }, { name: "Author" }, { name: "Read" }];

document.getElementById("submit").addEventListener("click", addbookhelper);
document.getElementById("myform").addEventListener("submit", addbookhelper);
function checkboxFunction() {
  var x = document.createElement("INPUT");
  x.setAttribute("type", "checkbox");
  document.body.appendChild(x);
}

function clickdisable(event) {
  event.target.disabled = true;
}

function addbookhelper(event) {
  event.preventDefault();
  let userTitle = document.getElementById("title").value;
  let userAuthor = document.getElementById("author").value;
  let userRead = document.getElementById("read").checked;
  let mynewbook = new Book(userTitle, userAuthor, userRead);
  lib.addBook(mynewbook);
  var table = document.getElementById("table");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(-1);
  var cell2 = row.insertCell(-1);
  var cell3 = row.insertCell(-1);
  cell1.innerHTML = userTitle;
  cell2.innerHTML = userAuthor;

  var x = document.createElement("INPUT");
  x.setAttribute("type", "checkbox");
  x.checked = userRead;
  x.disabled = userRead;
  // addEventListener("click");
  x.addEventListener("click", clickdisable);

  cell3.appendChild(x);
}
