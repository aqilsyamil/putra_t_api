var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var books_exports = {};
__export(books_exports, {
  default: () => books_default
});
module.exports = __toCommonJS(books_exports);
var booksController = __toESM(require("../controllers/books"), 1);
const bookRoutes = [
  {
    method: "GET",
    url: "/api/books",
    handler: booksController.getAllBooks
  },
  {
    method: "GET",
    url: "/api/books/:id",
    handler: booksController.getBook
  },
  {
    method: "POST",
    url: "/api/books",
    handler: booksController.addBook
  },
  {
    method: "PUT",
    url: "/api/books/:id",
    handler: booksController.updateBook
  },
  {
    method: "DELETE",
    url: "/api/books/:id",
    handler: booksController.deleteBook
  }
];
var books_default = bookRoutes;
