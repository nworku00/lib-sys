import BookList from './BookList.js';
import Book from './Book.js';
import Library from './Library.js';
import CardHolder from './Cardholder.js';
import LibraryCard from './Librarycard.js';

let mainBranch = new Library('Main')
let StaffPicks = new BookList('Staff Picks')
let CustomerPicks = new BookList('Customer Picks')
let harry = new Book('Harry', '', '', false, 0, 111)
let jerry = new Book('Jerry', '', '', false, 0, 111)
let larry = new Book('larry', '', '', false, 0, 111)
let berry = new Book('berry', '', '', false, 0, 111)
let nati = new CardHolder('nati', mainBranch,undefined)
StaffPicks.addBook(harry)
StaffPicks.addBook(jerry)
CustomerPicks.addBook(larry)
CustomerPicks.addBook(berry)
// console.log(StaffPicks)
// console.log(CustomerPicks)
mainBranch.intakeBookList(StaffPicks)
mainBranch.intakeBookList(CustomerPicks)
nati.checkoutBook(harry)
// console.log(mainBranch)
nati.returnBook(harry)
console.log(nati.books)
console.log(mainBranch.returnedBooks)





