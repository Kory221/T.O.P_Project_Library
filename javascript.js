const myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    };
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();    
};

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
};
/*test*/
addBookToLibrary("wangrin", "AMidou", 234, "read");
addBookToLibrary("The Lion King", "Kory", 300, "not read");
addBookToLibrary("pathé Sène", "Marodi", 43, "read");
addBookToLibrary("kocc barma", "kocc", 455, "read");
console.log(myLibrary);

/*Write a function that loops through the array and displays each book on the page.*/
function displayer (arr) {

}