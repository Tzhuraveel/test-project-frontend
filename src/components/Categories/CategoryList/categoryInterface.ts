import { ITask } from "../../Tasks/TaskList/interface";

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
