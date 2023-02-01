import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { pokemonApi } from "../apis/pokemon.api";
import { booksApi } from "../apis/books.api";
import statusReducer from "./slices/status.slice";

export const appStore = configureStore({
  reducer: {
    busy: statusReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(logger)
      .concat(pokemonApi.middleware)
      .concat(booksApi.middleware),
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
