import { createEntityAdapter, EntityState } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { booksAdapter } from "../store/adapters/book.adapters";
import { Book } from "../store/interfaces/book.interfaces";

interface BookNames {
  id: string;
  name: string;
}

export const booksApi = createApi({
  reducerPath: "books-api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/books/v1" }),
  tagTypes: ["GetBooks"],
  endpoints: (builder) => ({
    getBooks: builder.query<Array<Book>, string>({
      providesTags: ["GetBooks"],
      query: (option?: string) => `books/`,
    }),
    getBooksNames: builder.query<Array<Book>, string>({
      providesTags: ["GetBooks"],
      query: (option?: string) => `books/`,
      transformResponse: (response: Array<Book>, meta, arg) => {
        const initialState = booksAdapter.getInitialState();
        booksAdapter.setAll(initialState, response);
        return response;
      },
    }),
    getBookById: builder.query<Book, string>({
      query: (id) => `book/${id}`,
    }),
    getBookByName: builder.query<Book, string>({
      query: (name) => ({
        url: `book/${name}`,
        method: "get",
      }),
    }),
    addNewBook: builder.mutation({
      invalidatesTags: ["GetBooks"],
      query: (book) => ({
        url: "create/",
        method: "POST",
        // Include the entire book object as the body of the request
        body: book,
      }),
    }),
    updateBook: builder.mutation({
      invalidatesTags: ["GetBooks"],
      query: (book) => ({
        url: `/update/${book.id}`,
        method: "UPDATE",
        body: book,
      }),
    }),
    patchBook: builder.mutation({
      invalidatesTags: ["GetBooks"],
      query: (book) => ({
        url: `/patch/${book.id}`,
        method: "PATCH",
        body: book,
      }),
    }),
    deleteBook: builder.mutation({
      invalidatesTags: ["GetBooks"],
      query: (id: string) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useGetBookByNameQuery,
  useAddNewBookMutation,
  useUpdateBookMutation,
  usePatchBookMutation,
  useDeleteBookMutation,
} = booksApi;
