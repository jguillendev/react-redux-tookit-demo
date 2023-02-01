import { StatusTypes } from "../states/status.state";

export interface Status {
  id: string;
  status: StatusTypes;
  value?: string;
  message?: string;
}
