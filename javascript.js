const myLibrary = [];

function Book(title, author, pages, status) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    };
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id = crypto.randomUUID();    
};

function addBookToLibrary(title, author, pages, status) {
    const book = new Book(title, author, pages, status);
    myLibrary.push(book);
};
/*test*/
addBookToLibrary("wangrin", "AMidou", 234, "read");
addBookToLibrary("The Lion King", "Kory", 300, "unread");
addBookToLibrary("pathé Sène", "Marodi", 43, "read");
addBookToLibrary("kocc barma", "kocc", 455, "read");
console.log(myLibrary);

/*Write a function that loops through the array and displays each book on the page.*/


const booksList = document.querySelector(".books");

function displayer (arr) {
    for (const book of arr) {
        const newRow = booksList.insertRow();
        newRow.insertCell().textContent = book.title;
        newRow.insertCell().textContent = book.author;
        newRow.insertCell().textContent = book.pages;
        newRow.insertCell().textContent = book.status;
        newRow.insertCell().textContent = book.id;
        
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        newRow.insertCell().appendChild(delBtn);
        delBtn.addEventListener("click", () =>{
            arr.splice(arr[book],1);
            booksList.textContent ="";
            displayer(arr);
        })
        
        const toggleStatus = document.createElement("button");
        toggleStatus.textContent = "Change status";
        newRow.insertCell().appendChild(toggleStatus);
        toggleStatus.addEventListener("click", ()=> {
            if (book.status === "read") {
                book.status ="unread"
            }
            else {
                book.status = "read"
            };
            booksList.textContent ="";
            displayer(arr);
        })
    }
};

displayer(myLibrary);

/*Add a “New Book” button that brings up a form allowing users to input the details for the new book and add it to the library*/

const newBookBtn = document.querySelector("#new_book");

newBookBtn.addEventListener("click", () => {
    const dialog = document.querySelector("dialog");
    dialog.showModal();
    document.querySelector('form').reset();
})

const addBookbtn = document.querySelector("#add_book");
addBookbtn.addEventListener("click", () => {
    let title = document.querySelector("#title").value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector("#pages").value;
    let status = document.querySelector("input[name='status']:checked").value;
    if (title !== '' && author !=='' && pages > 0 && status !== '') {
        addBookToLibrary(title, author, pages, status);
        booksList.textContent ="";
        displayer(myLibrary);
        }
    })

/*Added the "delete" and "change status" buttons inside the displayer function*/