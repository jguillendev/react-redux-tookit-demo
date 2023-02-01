import { motion } from "framer-motion";
import { LoaderView } from "../views/LoaderView.shared";
// "bulbasaur"

interface IContentView {
  name?: string;
  payload?: any;
}

export const ContentView = ({ name, payload }: IContentView) => {
  return (
    <motion.section
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{ duration: 1.5 }}
      className="section"
    >
      <h1>Name: {payload.species?.name}</h1>
    </motion.section>
  );
};

interface IPokemonDetail {
  name: string;
}
export const PokemonDetail = ({ name }: IPokemonDetail) => {
  return (
    <LoaderView name={name}>
      <ContentView />
    </LoaderView>
  );
};
