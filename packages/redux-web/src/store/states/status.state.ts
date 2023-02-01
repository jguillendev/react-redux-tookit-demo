export enum StatusTypes {
  loading = "loading",
  complete = "complete",
  error = "error",
}

export type SliceState =
  | { id: string; status: StatusTypes; message: string }
  | { id: string; status: StatusTypes; value: string }
  | { id: string; status: StatusTypes };

export const initialState = { status: StatusTypes.loading } as SliceState;
