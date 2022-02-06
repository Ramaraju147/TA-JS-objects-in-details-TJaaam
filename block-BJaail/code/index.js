class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.id = Date.now();
    }
    createUi(){
        let li = document.createElement("li");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let span = document.createElement("span")
        p1.innerHTML = this.title;
        p2.innerHTML = this.author;
        p3.innerHTML = this.isbn;
        span.innerHTML = "❌"
        li.classList.add("flex","justify-between")
        li.append(p1,p2,p3,span);
        return li;
    }
}

class BookList{
    constructor(bookList = []){
        this.bookList = bookList
    }
    add(title,author,isbn){
        let book = new Book(title,author,isbn)
        this.bookList.push(book);
        this.createUi();
    }
    remove(id){
        console.log("hi");
        let index = this.bookList.findIndex((book) => book.id === id);
        this.bookList.splice(index,1)
        this.createUi()
    }
    createUi(){
        root.innerHTML = ""
        this.bookList.forEach((e) => {
            let li = e.createUi()
            li.querySelector("span").addEventListener("click",this.remove.bind(this,e.id))
            root.append(li)
        })
    }
}

let book = new BookList()

let form = document.querySelector("form")

let root = document.querySelector(".root")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let title = form.elements.title.value;
    let author = form.elements.author.value;
    let isbn = form.elements.isbn.value;
    form.elements.title.value = "";
    form.elements.author.value = "";
    form.elements.isbn.value = ""
    book.add(title,author,isbn);
    console.log(book.bookList)
})