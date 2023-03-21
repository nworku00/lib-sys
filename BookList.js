export default class BookList {
    constructor(name,books = []) {
        this.name = name;
        this.books=books
    }
    addBook(book) {
        this.books.push(book)
        return this.books
    }
}