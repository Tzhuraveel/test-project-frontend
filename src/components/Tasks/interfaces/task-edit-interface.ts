import { Moment } from "moment";

export interface ITaskValue {
  name: string;
  description?: string | null;
  dateStart?: Moment | null;
  dateEnd?: Moment | null;
}
