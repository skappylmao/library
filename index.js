let myLibrary = [];
function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let id = myLibrary.length;
    newBook = new Book(id, title, author, pages, read);
    myLibrary.push(newBook);
    console.log("Book added! Book id: " + id);
    return newBook;
}

function createCard(Book){
    let card = document.createElement("div");
    card.classList.add("card");
    card.id = "bookid" + Book.id;


    let bookid = document.createElement("p");
    bookid.classList.add("bookid");
    bookid.textContent = Book.id;
    bookid.classList.add("hidden")
    

    let cardTitle = document.createElement("h2");
    cardTitle.classList.add("cardTitle");
    cardTitle.textContent = Book.title;

    let cardAuthor = document.createElement("p");
    cardAuthor.classList.add("cardAuthor");
    cardAuthor.textContent = Book.author;

    let cardPages = document.createElement("p");
    cardPages.classList.add("cardPages");
    cardPages.textContent = "Pages read: " + Book.pages;

    let cardBtns = document.createElement("div");
    cardBtns.classList.add("cardBtns");

    let setRead = document.createElement("button");
    setRead.classList.add("setRead");
    setRead.textContent = "Completed";
    setRead.addEventListener("click", function(){
        if (setRead.textContent == "Completed"){
            setRead.textContent = "Not Completed";
            Book.read = false;
        } else {
            setRead.textContent = "Completed";
            Book.read = true
        }
    })
    let rmcard = document.createElement("button");
    rmcard.classList.add("rmcard");
    rmcard.textContent = "Remove";
    rmcard.addEventListener("click", function(){
        myLibrary.splice(myLibrary.indexOf(Book), 1);
        rmcard.parentElement.parentElement.remove();
    })

    cardBtns.appendChild(setRead);
    cardBtns.appendChild(rmcard);
    
    card.appendChild(bookid);
    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardBtns);

    cardView = document.querySelector(".bookView");
    cardView.appendChild(card);


}

// Function to open the pop-up
function openForm() {
    document.getElementById('popupForm').style.display = 'block';
  }
  
  // Function to close the pop-up
  function closeForm() {
    document.getElementById('popupForm').style.display = 'none';
  }





openButton = document.getElementById("addBook");
openButton.addEventListener("click", openForm);

testBook = addBookToLibrary("Harry Potter", "J.K. Rowling", 500, true);
createCard(testBook);

form = document.getElementById("form");
form.addEventListener("submit",event => {
    event.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("complete").checked;
    newBook = addBookToLibrary(title, author, pages, read);
    createCard(newBook);
});


