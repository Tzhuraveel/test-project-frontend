import moment from "moment";
import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

import style from "../../multiple-styles/popup.module.css";
import { MultiUseButton } from "../../Supporting";
import { CategoryActions } from "../CategoryActions/CategoryActions";
import { CategoryDeletePopup } from "../CategoryDeletePopup/CategoryDeletePopup";
import { CategoryEditPopup } from "../CategoryEditPopup/CategoryEditiPopup";
import { ICategory } from "../CategoryList/category-list-interface";
import css from "./CategoryItem.module.css";

interface IProps {
  category: ICategory;
}

const CategoryItem: FC<IProps> = ({ category }) => {
  const navigate = useNavigate();

  const [isOpenActionsPopup, setIsOpenActionsPopup] = useState<boolean>(false);
  const [isOpenDeletePopup, setIsOpenDeletePopup] = useState<boolean>(false);
  const [isOpenEditPopup, setIsOpenEditPopup] = useState<boolean>(false);

  return (
    <div className={css.category__wrapper}>
      <div className={css.category__container_info}>
        <h3 className={css.category__component}>{category.name}</h3>
        <h4 className={css.category__component}>{category.taskCount} tasks</h4>
        <h4 className={css.category__component}>
          {moment(category.dateCreated).format("YYYY.MM.DD")}
        </h4>
      </div>
      <div className={css.category__actions}>
        <div
          onClick={() => setIsOpenActionsPopup(true)}
          className={css.block__actions_button}
        >
          <MultiUseButton contentButton={"actions"} variant={"text"} />
          {isOpenActionsPopup && (
            <div
              className={css.category__actions_wrapper}
              onClick={() => setIsOpenActionsPopup(false)}
            >
              <CategoryActions
                setIsOpenActionsPopup={setIsOpenActionsPopup}
                setIsOpenEditPopup={setIsOpenEditPopup}
                setIsOpenDeletePopup={setIsOpenDeletePopup}
              />
            </div>
          )}
        </div>
        <div
          className={css.block__more_button}
          onClick={() => {
            navigate(`/tasks/${category.id}/${category.name}`);
          }}
        >
          <MultiUseButton contentButton={"more"} variant={"text"} />
        </div>
      </div>
      {isOpenActionsPopup && (
        <div
          onClick={() => setIsOpenActionsPopup(false)}
          className={style.popup_wrapper}
        ></div>
      )}
      {isOpenEditPopup && (
        <CategoryEditPopup
          category={category}
          setIsOpenPopup={setIsOpenEditPopup}
        />
      )}
      {isOpenDeletePopup && (
        <CategoryDeletePopup
          categoryId={category.id}
          setIsOpenPopup={setIsOpenDeletePopup}
        />
      )}
    </div>
  );
};

export { CategoryItem };
