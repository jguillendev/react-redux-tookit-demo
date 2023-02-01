import { createSelector } from "@reduxjs/toolkit";
import { selectAllPokemons } from "../adapters/pokemon.adapters";
import { selectAllBooks, booksAdapter } from "../adapters/book.adapters";

// creando un custom selector que combina el uso
// de algunos selectores de adapters que querramos utilizar
export const selectAuthorBooks = (author: string) =>
  createSelector(
    [
      // seleccionar los pokemones que tenemos en el store
      (state) => selectAllPokemons(state),
      // seleccionar los libros que tenemos en el store
      (state) => selectAllBooks(state),
    ],
    (pokemons, books) => {
      // devolver los libros de un autor
      // podemos hacer cualquier cosa tambien con los pokemones
      return books
        .map((b) => ({ id: b.id, author: b.author, name: b.name }))
        .filter((b) => b.author.includes(author));
    }
  );
