const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

function displayBooks() {
  const libraryContainer = document.getElementById("library-container");
  libraryContainer.innerHTML = ""; // Clear previous content

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    // Display book details
    bookCard.innerHTML = `
      <p>Title: ${book.title}</p>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? "Yes" : "No"}</p>
      <button onclick="removeBook(${index})">Remove</button>
      <button onclick="toggleReadStatus(${index})">Toggle Read Status</button>
    `;

    libraryContainer.appendChild(bookCard);
  });
}

document.getElementById("new-book-btn").addEventListener("click", () => {
  // Code to show the form for new book input
  const formContainer = document.getElementById("form-container");
  formContainer.innerHTML = `
    <form id="book-form">
      <label for="title">Title:</label>
      <input type="text" id="title" name="title" required>

      <label for="author">Author:</label>
      <input type="text" id="author" name="author" required>

      <label for="pages">Pages:</label>
      <input type="number" id="pages" name="pages" required>

      <label for="read">Read:</label>
      <input type="checkbox" id="read" name="read">

      <button type="button" onclick="submitBookForm()">Add Book</button>
    </form>
  `;
});

function submitBookForm() {
  // Code to handle the form submission and add the book to the library
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);

  // Clear the form after submission
  document.getElementById("form-container").innerHTML = "";
}

// Function to remove a book from the library
function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

// Function to toggle the read status of a book
function toggleReadStatus(index) {
  myLibrary[index].read = !myLibrary[index].read;
  displayBooks();
}

// Initial display of books
displayBooks();
