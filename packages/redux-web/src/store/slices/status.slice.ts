import { createSlice } from "@reduxjs/toolkit";
import { settingBusy } from "../reducers/status.reducers";
import { initialState, StatusTypes } from "../states/status.state";
import { RootState } from "../store.app";

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setBusy: settingBusy,
  },
});

// Exportando el reducer para agregarlo al configureStore
export default statusSlice.reducer;

// Action creators are generated for each case reducer function
export const { setBusy } = statusSlice.actions;

// Custom selectors
export const isBusy = (state: RootState) =>
  state.busy.status === StatusTypes.loading;

// Custom functions
export const changeStatusAsync = (status: StatusTypes) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(setBusy(status));
  }, 3500);
};
