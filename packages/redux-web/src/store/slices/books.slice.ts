import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { booksAdapter } from "../adapters/book.adapters";
import { Book } from "../interfaces/book.interfaces";

const booksSlice = createSlice({
  name: "books",
  initialState: booksAdapter.getInitialState(),
  reducers: {
    bookAdded: booksAdapter.addOne,
    booksReceived(state, action: PayloadAction<{ books: Array<Book> }>) {
      booksAdapter.setAll(state, action.payload.books);
    },
  },
});

export default booksSlice.reducer;
// Action creators are generated for each case reducer function
export const { bookAdded, booksReceived } = booksSlice.actions;
