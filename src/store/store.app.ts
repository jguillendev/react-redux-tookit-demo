import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { booksApi } from "../apis/books.api";
import statusReducer from "./slices/status.slice";

export const appStore = configureStore({
  reducer: {
    busy: statusReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(booksApi.middleware),
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
