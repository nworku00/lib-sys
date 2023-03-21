export default class Library {
    constructor(branchName,bookShelf = [],returnedBooks=[],cardHolders=[]) {
        this.branchName = branchName
        this.bookShelf = bookShelf
        this.cardHolders = cardHolders
        this.returnedBooks=returnedBooks
    }
    intakeBookList(booklist) {
        let mbook = booklist.books
        this.bookShelf= this.bookShelf.concat(mbook)
        return this.bookShelf
    }
    
}