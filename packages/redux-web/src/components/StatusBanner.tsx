import { StatusTypes } from "../store/states/status.state";
import { useAppDispatch, useAppSelector } from "../store/store.hooks";

export const StatusBanner = () => {
  //const dispatch = useAppDispatch();
  const busy = useAppSelector((state) => state.busy);

  if (busy.status === StatusTypes.loading)
    return <div>Loading: {busy.status}</div>;
  return <div>Ready</div>;
};
