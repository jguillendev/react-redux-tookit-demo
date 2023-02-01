import { useMemo } from "react";
import { booksApi, useGetBooksQuery } from "../apis/books.api";
import {
  selectAllBooks,
  selectAuthorBooks,
  selectTotalBooks,
} from "../store/adapters/book.adapters";
import { Book } from "../store/interfaces/book.interfaces";
import { useAppDispatch, useAppSelector } from "../store/store.hooks";

export function BooksList() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectTotalBooks);
  //const books = useAppSelector(selectAllBooks);
  const {
    data: items,
    isError,
    isFetching,
    isLoading,
    isSuccess,
    isUninitialized,
    refetch,
  } = useGetBooksQuery("");

  const sortedBooks = useMemo(() => {
    const sortedBooks: Array<Book> = items?.slice() || [];
    // Sort books in ascending price order
    sortedBooks.sort((a: Book, b: Book) => a.price - b.price);
    return sortedBooks;
  }, [items]);

  // const patchBooks = dispatch(
  //   booksApi.util.updateQueryData('getBooks', undefined, (draftBooks) => {
  //     draftBooks.push({ id: 1, name: 'Teddy' })
  //   })
  // )

  // const patchBook = dispatch(
  //   booksApi.util.updateQueryData(
  //     "getBookById",
  //     "2336f6a0-a1c4-11ed-af92-5dad79a1fd7d",
  //     (draftBook) => {
  //       draftBook.name = "Lilly";
  //     }
  //   )
  // );

  const onFetchBooks = () => {
    selectAuthorBooks("jguillen");
  };

  const booksContent = sortedBooks.map((book: Book) => (
    <div key={book.id}>
      <div>{`${book.name} ${book.price}`}</div>
    </div>
  ));

  return (
    <div>
      <pre style={{ display: "none" }}>
        {JSON.stringify({
          items,
          isError,
          isFetching,
          isLoading,
          isSuccess,
          isUninitialized,
        })}
      </pre>
      <div className="flex flex-col">
        <p>
          There are <span>{count}</span> Books.{" "}
        </p>
        <p>{count === 0 && `Why don't you fetch some more?`}</p>
        <button className="bg-orange" onClick={onFetchBooks}>
          Fetch Books
        </button>
      </div>
      {booksContent}
    </div>
  );
}
