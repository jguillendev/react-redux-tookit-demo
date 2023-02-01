import { createEntityAdapter } from "@reduxjs/toolkit";
import { Book } from "../interfaces/book.interfaces";

export const booksAdapter = createEntityAdapter<Book>({
  selectId: (book) => book.bookId,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});
