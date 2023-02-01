import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addSuperBookThunk } from "../../thunks/books.thunks";
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
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addSuperBookThunk.fulfilled, (state, action) => {
      console.log("addSuperBookThunk.fulfilled:result:payload", action.payload);
      // Add the super book result to the state array
      // state.entities.push(action.payload)
    });

    builder.addCase(addSuperBookThunk.rejected, (state, action) => {
      console.log("addSuperBookThunk.rejected:error:payload", action.payload);
      // Add super book fallo, hacer algo!
    });
  },
});

// Exportando el reducer para agregarlo al configureStore
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

// Custom functions
export const addSuperBookAsync = (book: Book) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(addSuperBookThunk(book));
  }, 3500);
};
