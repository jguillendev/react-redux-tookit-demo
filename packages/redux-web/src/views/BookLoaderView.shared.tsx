import React from "react";
import { PropsWithChildren } from "react";
import { useGetBookByIdQuery } from "../apis/books.api";

type ILoaderView = {
  id: string;
};

export const BookLoaderView = ({
  id,
  children,
}: PropsWithChildren<ILoaderView>) => {
  const { data, error, isLoading } = useGetBookByIdQuery(id);
  return (
    <section className="p8-4">
      {isLoading && <h1 className="title">Cargando</h1>}

      {error && <h1 className="title">Ups sucedio un error</h1>}

      {data &&
        React.cloneElement(children as JSX.Element, {
          id: id,
          payload: data,
        })}
    </section>
  );
};
