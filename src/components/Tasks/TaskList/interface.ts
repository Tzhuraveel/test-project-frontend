import { ICategory } from "../../Categories/CategoryList/categoryInterface";

export interface ITask {
  id: number;
  name: string;
  description: string;
  dateStart: Date;
  dateEnd: Date;
  category: ICategory;
}

export interface IGetAllTasks {
  getAllTasks: ITask[];
}
