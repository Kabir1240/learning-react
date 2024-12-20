const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(1);

// --> Destructuring
// const title = book.title;
// const author = book.author;
// const genres = book.genres;
const { title, author, genres } = book; // same as above

// --> Rest
const { primaryGenre, ...otherGenres } = genres; // primaryGenre -> genre1 | otherGenres -> { genre2, genre3... }

// --> Spread
const newGenres = [...genres, "epic fantasy"]; // newGenres -> {genre1, genre2, genre3, epic fantasy}

const updatedBook = {
  ...book,

  // adding new property
  moviePublicationDate: "12-10-2024",

  // overwriting existing property
  pages: 1210,
}

// --> String Literal. Can be used to type js expressions inside a string
const summary = `${title}, a ${pages} long book, was written by ${author}`

// --> ternaries, basically if then else. Can be used in template literals
pages > 1000 ? "over a thousand" : "less than 1000"

// --> arrow functions. good for smaller functions, but can be used for larger ones too
// function getYear(str) {
//   return str.split("-")[0]
// }

const getYear = (str) => str.split("-")[0]; // same as the function above. Works for yyyy-mm-dd format
// if you want several lines, you can put the code in curly brackets but then you need the return keyword again.

// --> Short Circuiting
// same as python.

// truthy value is anything thats not a falsy value
// falsy: 0, '', null, undefined

// -?? replacement for || but does not short circuit for 0 and ""
const countWrong = book.reviews.librarything.reviewsCount || "No Data"; // gives no data when 0 reviews
const countRight = book.reviews.librarything.reviewsCount ?? "No Data"; 

// --> optional chaining
function getTotalReviewCount(book){
  const goodreadsCount = book.reviews?.goodreads?.reviewsCount;
  const librarythingCount = book.reviews?.librarything?.reviewsCount ?? 0; 
  // if library anything does not exist, we don't get an error. But libraryanything Count returns as NaN
  return { goodreadsCount, librarythingCount }
}

// functional array methods do not mutate the original array

// --> map
const books = getBooks();
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
// x = [2, 4, 8, 10]

const titles = books.map((book) => book.title);
// creates an array of titles

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});

// better way to do it (less code)
const betterEssentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));

// --> filter method
const longBooks = books.filter((book) => book.pages > 500);
// only books with more than 500 pages

// chaining filters (can also just && operator)
const longBooksWithMovie = books.filter((book) => book.pages > 500).filter((book) => book.hasMovieAdaptation);

// chaining filter with map
const adventureBooksTitles = books.filter((book) => book.genres.includes("adventure")).map((book) => book.title);

// --> reduce
// acc or accumulator is current value of return var. Starts at the 0 given
// initial value can be anything, array or object etc. Can do very complex things
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0)

// --> sort
const arr = [3, 7, 1, 9, 6];
// not a functional function. arr.slice() can be used to make a copy
// sorts in ascending order
// a is prev value in arr, b is next value. If negative value b first and a later
const sorted = arr.slice().sort((a, b) => a - b);

// can be used to sort objects too
const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);

// --> Working with immutable arrays
// 1) add book object to array
const newBook = {
  id: 6,
  title: "My biography",
  author: "your mom",
}

const booksAfterAdd = {...books, newBook};

// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id != 3);

// 3) Update book object in the array
// if book id is 1, update pages to 1, else return as is
const booksAfterUpdate = booksAfterDelete.map((book) => book.id === 1? {...book, pages: 1} : book);

// --> Asynchronous JavaScript: Promises
// promises can be pending, redacted, fulfilled. The below line is a promise. Js will continue execution without
// waiting for it to be fulfilled. The first "then" is also a promise
fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then((res) => res.json())
   .then((data) => console.log(data));

// --> async/await functions
// better syntax. Pauses the code until the promise is fulfilled
// just keep in mind that the return value of an async function is also a promise.
// you would usually just set the state in the function instead of returning
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
   return data;
}

