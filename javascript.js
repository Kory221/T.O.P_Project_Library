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
addBookToLibrary("The Lion King", "Kory", 300, "not read");
addBookToLibrary("pathé Sène", "Marodi", 43, "read");
addBookToLibrary("kocc barma", "kocc", 455, "read");
console.log(myLibrary);

/*Write a function that loops through the array and displays each book on the page.*/


const table = document.querySelector("table");

function displayer (arr) {
    for (const book of arr) {
        const newRow = table.insertRow();
        newRow.insertCell(-1).textContent = book.title;
        newRow.insertCell(-1).textContent = book.author;
        newRow.insertCell(-1).textContent = book.pages;
        newRow.insertCell(-1).textContent = book.status;
        newRow.insertCell(-1).textContent = book.id;

    }
};

displayer(myLibrary);

