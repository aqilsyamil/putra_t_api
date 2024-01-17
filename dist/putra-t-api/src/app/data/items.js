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
var items_exports = {};
__export(items_exports, {
  default: () => items_default
});
module.exports = __toCommonJS(items_exports);
const books = [
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
var items_default = books;
//# sourceMappingURL=items.js.map
