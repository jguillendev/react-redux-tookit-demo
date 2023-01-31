import { AnimatePresence } from "framer-motion";
import { useLayoutEffect } from "react";
import "./App.css";
import { PokemonDetail } from "./components/PokemonDetail";
import { StatusBanner } from "./components/StatusBanner";
import { changeStatusAsync, isBusy } from "./store/slices/status.slice";
import { StatusTypes } from "./store/states/status.state";
import { useAppDispatch, useAppSelector } from "./store/store.hooks";

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
      <a
        href="https://codesandbox.io/s/github/reduxjs/redux-essentials-counter-example"
        target="_blank"
      >
        Counter Example
      </a>
    </div>
  );
}

export default App;
