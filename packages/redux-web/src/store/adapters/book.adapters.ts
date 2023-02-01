import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
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

export const selectAuthorBooks = (author: string) =>
  createSelector(
    [
      (state) => selectAllBooks(state), // select the current article
    ],
    (books) => {
      // devolver los libros de un autor
      return books
        .map((b) => ({ id: b.id, author: b.author, name: b.name }))
        .filter((b) => b.author.includes(author));
    }
  );
