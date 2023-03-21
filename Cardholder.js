
export default class CardHolder {
    constructor(name, primaryBranch, cardNumber, books = []) {
        this.name = name
        this.primaryBranch = primaryBranch
        this.cardNumber = cardNumber
        this.books = books
    }
    checkoutBook(book , branch = this.primaryBranch) {
        const index = branch.bookShelf.indexOf(book);
        if (index > -1) { 
            this.books=this.books.concat(branch.bookShelf.splice(index, 1));
        }
    }
    returnBook(book, branch = this.primaryBranch) {
        const index = this.books.indexOf(book);
        if (index > -1) {
            branch.returnedBooks = branch.returnedBooks.concat(this.books.splice(index,1))
        }
    }
}