import moment from "moment";
import { FC } from "react";

import { ICategory } from "../CategoryList/categoryInterface";
import css from "./CategoryItem.module.css";

interface IProps {
  category: ICategory;
}

const CategoryItem: FC<IProps> = ({ category }) => {
  return (
    <div className={css.category__wrapper}>
      <div className={css.category__container_info}>
        <h3 className={css.category__component}>{category.name}</h3>
        <h4 className={css.category__component}>{category.taskCount} tasks</h4>
        <h4 className={css.category__component}>
          {moment(category.dateCreated).format("YYYY.MM.DD")}
        </h4>
      </div>
    </div>
  );
};

export { CategoryItem };
