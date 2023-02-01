import { motion } from "framer-motion";
import { BookLoaderView } from "../views/BookLoaderView.shared";

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
      <h1>Name: {payload.name}</h1>
    </motion.section>
  );
};

interface IBookDetail {
  id: string;
}

export const BookDetail = ({ id }: IBookDetail) => {
  return (
    <BookLoaderView id={id}>
      <ContentView />
    </BookLoaderView>
  );
};
