import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Book } from "../store/interfaces/book.interfaces";

export const booksApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/books/v1" }),
  endpoints: (builder) => ({
    getBookById: builder.query<Book, string>({
      query: (id) => `book/${id}`,
    }),
    getBookByName: builder.query<Book, string>({
      query: (name) => `book/${name}`,
    }),
  }),
});

export const { useGetBookByIdQuery, useGetBookByNameQuery } = booksApi;
