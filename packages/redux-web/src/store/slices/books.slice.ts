import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { booksAdapter } from "../adapters/book.adapters";
import { Book } from "../interfaces/book.interfaces";

const booksSlice = createSlice({
  name: "books",
  initialState: booksAdapter.getInitialState(),
  reducers: {
    bookAdded: booksAdapter.addOne,
    remove: booksAdapter.removeOne,
    booksReceived(state, action: PayloadAction<{ books: Array<Book> }>) {
      console.log(
        "booksSlice:reducers:booksReceived:books: ",
        action.payload.books
      );
      booksAdapter.setAll(state, action.payload.books);
    },
  },
});

export default booksSlice.reducer;
// Action creators are generated for each case reducer function
export const { bookAdded, booksReceived, remove } = booksSlice.actions;
