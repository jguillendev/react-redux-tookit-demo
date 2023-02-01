import { createEntityAdapter, EntityState } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { booksAdapter } from "../store/adapters/book.adapters";
import { Book } from "../store/interfaces/book.interfaces";

export type PatchEntityPayload = {
  id: string;
  changes: any;
};

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
        // podemos guardar datos en un store
        // utilizando los metodos de algun adapter

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
    addNewBook: builder.mutation<Book, Partial<Book>>({
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
    patchBook: builder.mutation<Book, Partial<PatchEntityPayload>>({
      invalidatesTags: ["GetBooks"],
      query: (data) => ({
        url: `/patch/${data.id}`,
        method: "PATCH",
        body: data.changes,
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
