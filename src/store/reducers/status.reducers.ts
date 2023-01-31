import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliceState, StatusTypes } from "../states/status.state";

export const settingBusy: CaseReducer<
  SliceState,
  PayloadAction<StatusTypes>
> = (state, action) => {
  state.status = action.payload;
};
