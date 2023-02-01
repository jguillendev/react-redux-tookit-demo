import { createEntityAdapter } from "@reduxjs/toolkit";
import { Book } from "../interfaces/book.interfaces";
import { RootState } from "../store.app";

export const booksAdapter = createEntityAdapter<Book>({
  selectId: (book) => book.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export const {
  selectById: selectBookById,
  selectIds: selectBookIds,
  selectEntities: selectBookEntities,
  selectAll: selectAllBooks,
  selectTotal: selectTotalBooks,
} = booksAdapter.getSelectors((state: RootState) => state.books);
