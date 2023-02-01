export enum StatusTypes {
  loading = "loading",
  complete = "complete",
  error = "error",
}

export type SliceState =
  | { status: StatusTypes; message: string }
  | { status: StatusTypes; value: string }
  | { status: StatusTypes };

export const initialState = { status: StatusTypes.loading } as SliceState;
