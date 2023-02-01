import { useState } from "react";
import { useGetBookByIdQuery, useUpdateBookMutation } from "../apis/books.api";

interface IUpdateForm {
  id: string;
}
export const BookUpdateForm = ({ id }: IUpdateForm) => {
  const { data: book } = useGetBookByIdQuery(id);
  const [updateBook, { isLoading, isError }] = useUpdateBookMutation();

  const [name, setName] = useState<string>(book!.name);
  const [price, setPrice] = useState<number>(book!.price);

  const onNameChanged = (e: any) => setName(e.target.value);
  const onPriceChanged = (e: any) => setPrice(e.target.value);

  const onSubmitHandler = async (e: any) => {
    await updateBook({ id: id, name, price });
  };

  if (isLoading) return <section>Cargando, porfavor espere</section>;
  else if (isError) return <section>Error obteniendo libro: ${id}</section>;
  else
    return (
      <form onSubmit={onSubmitHandler}>
        <input type="text" defaultValue={name} onChange={onNameChanged} />
        <input type="number" defaultValue={price} onChange={onPriceChanged} />
        <button type="submit">Save</button>
      </form>
    );
};
