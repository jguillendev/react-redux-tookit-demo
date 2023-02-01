import { createAsyncThunk } from "@reduxjs/toolkit";
import { Book } from "../store/interfaces/book.interfaces";

export const addSuperBookThunk = createAsyncThunk(
  "books/addSuperBook",
  async (book: Book, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/books",
        {
          method: "POST",
          body: JSON.stringify(book),
        }
      );
      const data = await response.json();
      return data;
    } catch (err) {
      // You can choose to use the message attached to err or write a custom error
      return rejectWithValue("Opps there seems to be an error");
    }
  }
);
