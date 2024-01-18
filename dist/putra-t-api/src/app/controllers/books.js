var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var books_exports = {};
__export(books_exports, {
  addBook: () => addBook,
  deleteBook: () => deleteBook,
  getAllBooks: () => getAllBooks,
  getBook: () => getBook,
  updateBook: () => updateBook
});
module.exports = __toCommonJS(books_exports);
let books = [
  {
    id: 1,
    title: "Maharana Pratap : The Invincible Warrior",
    author: "Rima Hooja"
  },
  {
    id: 2,
    title: "Prithviraj Chauhan - A Light on the Mist in History",
    author: "Virendra Singh Rathore"
  },
  {
    id: 3,
    title: "Rani Laxmibai: Warrior-Queen of Jhansi",
    author: "Pratibha Ranade"
  }
];
const getAllBooks = async (req, reply) => {
};
const getBook = async (req, reply) => {
  const id = Number(req.params.id);
  const book = books.find((book2) => book2.id === id);
  return book;
};
const addBook = async (req, reply) => {
  const id = books.length + 1;
  const newBook = {
    id,
    title: req.body.title,
    author: req.body.author
  };
  books.push(newBook);
  return newBook;
};
const updateBook = async (req, reply) => {
  const id = Number(req.params.id);
  books = books.map((book) => {
    if (book.id === id) {
      return {
        id,
        title: req.body.title,
        author: req.body.author
      };
    }
  });
  return {
    id,
    title: req.body.title
  };
};
const deleteBook = async (req, reply) => {
  const id = Number(req.params.id);
  books = books.filter((book) => book.id !== id);
  return {
    msg: `Blog with ID ${id} is deleted`
  };
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook
});
