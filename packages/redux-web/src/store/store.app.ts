import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import logger from "redux-logger";
import { pokemonApi } from "../apis/pokemon.api";
import { booksApi } from "../apis/books.api";
import statusReducer from "./slices/status.slice";
import booksReducer from "./slices/books.slice";
import pokemonReducer from "./slices/pokemon.slice";

export const appStore = configureStore({
  reducer: {
    // agregando reducers de Slices
    busy: statusReducer,
    pokemon: pokemonReducer,
    books: booksReducer,
    // agregando reducers de Apis
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(logger)
      // agregando middlewares de apis
      .concat(pokemonApi.middleware)
      .concat(booksApi.middleware),
});

// configure listeners using the provided defaults
setupListeners(appStore.dispatch);

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
