import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { booksAdapter } from "../adapters/book.adapters";
import { Book } from "../interfaces/book.interfaces";

const booksSlice = createSlice({
  name: "books",
  initialState: booksAdapter.getInitialState(),
  reducers: {
    // Agregando metodos del adapter para que esten disponibles en el Reducer
    selectAll: booksAdapter.setAll,
    bookAdded: booksAdapter.addOne,
    addOne: booksAdapter.addOne,
    addMany: booksAdapter.addMany,
    setAll: booksAdapter.setAll,
    setMany: booksAdapter.setMany,
    updateOne: booksAdapter.updateOne,
    removeOne: booksAdapter.removeOne,
    // implementando custom reducer
    booksReceived(state, action: PayloadAction<{ books: Array<Book> }>) {
      console.log(
        "booksSlice:reducers:booksReceived:books: ",
        action.payload.books
      );
      //podemos escribir en el store usando funciones del adapter
      booksAdapter.setAll(state, action.payload.books);
    },
  },
});

export default booksSlice.reducer;

// Action creators are generated for each case reducer function
// se usan con useAppSelector o con useAppDispatch
export const {
  bookAdded,
  booksReceived,
  removeOne,
  selectAll,
  setAll,
  setMany,
  addMany,
  addOne,
  updateOne,
} = booksSlice.actions;
