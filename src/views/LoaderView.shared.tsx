import React from "react";
import { PropsWithChildren } from "react";
import { useGetPokemonByNameQuery } from "../apis/books.api";

type ILoaderView = {
  name: string;
};

export const LoaderView = ({
  name,
  children,
}: PropsWithChildren<ILoaderView>) => {
  const { data, error, isLoading } = useGetPokemonByNameQuery(name);
  return (
    <section className="p8-4">
      {isLoading && <h1 className="title">Cargando</h1>}

      {error && <h1 className="title">Ups sucedio un error</h1>}

      {data &&
        React.cloneElement(children as JSX.Element, {
          name: name,
          payload: data,
        })}
    </section>
  );
};
