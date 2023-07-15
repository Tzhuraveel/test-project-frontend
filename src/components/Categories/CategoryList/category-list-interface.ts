import { ITask } from "../../Tasks";

export interface IQueryCategories {
  getAllCategories: ICategory[];
}

export interface ICategory {
  id: number;
  name: string;
  dateCreated?: Date;
  taskCount?: number;
  tasks: ITask[];
}
