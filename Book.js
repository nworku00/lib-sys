export default class Book {
    constructor(title, genre, author, hasBeenRead, currentPage = 0, totalNumberOfPages) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.hasBeenRead = hasBeenRead;
        this.currentPage = currentPage;
        this.totalNumberOfPages = totalNumberOfPages;
    }

    // accept a number of pages and return the updated current page
    readingSession(pages) {
        this.currentPage += pages;
        
        this.hasBeenRead = this.totalNumberOfPages === this.currentPage ? true : false; 
        
        return this.totalNumberOfPages === this.currentPage ? `you have finished another book!` 
        : this.currentPage;
    }
}
