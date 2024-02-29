// import { makeAutoObservable } from "mobx";

// class B3Store {
//   constructor() {
//     // define and init observables
//     this.stocks = [];
//     this.searchParam = "";
//     makeAutoObservable(this);
//   }

//   setSearchParam = (param) => {
//     this.searchParam = param;
//   };

//   setBooks = (books) => (this.books = books);

//   get filteredBooks() {
//     return this.books.filter((book) =>
//       book.title.toLowerCase().includes(this.searchParam.toLowerCase())
//     );
//   }

//   // special method for demonstration
//   fetchAndSetBooksOnClient = async () => {
//     const newBooks = await Promise.resolve([...books, ...clientBooks]);
//     console.log(newBooks);
//     this.setBooks(newBooks);
//   };
// }

// export default B3Store