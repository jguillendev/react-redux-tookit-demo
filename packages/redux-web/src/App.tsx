import { AnimatePresence } from "framer-motion";
import { useLayoutEffect } from "react";
import "./App.css";
import { BookDetail } from "./components/BookDetail";
import { PokemonDetail } from "./components/PokemonDetail";
import { StatusBanner } from "./components/StatusBanner";
import { changeStatusAsync, isBusy } from "./store/slices/status.slice";
import { StatusTypes } from "./store/states/status.state";
import { useAppDispatch, useAppSelector } from "./store/store.hooks";
import { BooksList } from "./views/BookListView";

function App() {
  const dispatch = useAppDispatch();
  //const busy = useAppSelector((state) => state.busy);
  const fetching = () => {
    console.log("app:fetching");
    dispatch(changeStatusAsync(StatusTypes.complete));
  };

  useLayoutEffect(() => {
    fetching();
  }, [isBusy]);

  return (
    <div className="App">
      <StatusBanner />
      <AnimatePresence initial={true}>
        <PokemonDetail name="bulbasaur" />
      </AnimatePresence>
      <AnimatePresence initial={true}>
        <BookDetail id="2336f6a0-a1c4-11ed-af92-5dad79a1fd7d" />
      </AnimatePresence>
      <a
        href="https://codesandbox.io/s/github/reduxjs/redux-essentials-counter-example"
        target="_blank"
      >
        Counter Example
      </a>
      <BooksList />
    </div>
  );
}

export default App;
