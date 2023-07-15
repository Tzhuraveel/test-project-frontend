import { useQuery } from "@apollo/client";
import React, { FC, useEffect, useState } from "react";

import { GET_ALL_CATEGORIES } from "../../../graphql";
import style from "../../multiple-styles/popup.module.css";
import { MultiUseButton } from "../../Supporting";
import { CategoryAddPopup } from "../CategoryAddPopup/CategoryAddPopup";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import { ICategory, IQueryCategories } from "./categoryInterface";
import css from "./CategoryList.module.css";

const CategoryList: FC = () => {
  const [IsOpenAddPopup, setIsOpenAddPopup] = useState<boolean>(false);
  const [categories, setCategories] = useState<ICategory[]>([]);

  const { data, loading } = useQuery<IQueryCategories>(GET_ALL_CATEGORIES, {
    errorPolicy: "all",
  });

  useEffect(() => {
    if (data?.getAllCategories !== undefined) {
      setCategories(data.getAllCategories);
    }
  }, [data]);

  return (
    <div className={css.categories__wrapper}>
      <div className={css.categories__header}>
        <div onClick={() => setIsOpenAddPopup(true)}>
          <MultiUseButton contentButton={"add category"} />
        </div>
      </div>
      <div className={css.categories__container}>
        {categories.length !== 0 &&
          categories.map((category: ICategory) => (
            <CategoryItem category={category} key={category.id} />
          ))}
        {loading && <h1>Loading...</h1>}
        {categories.length === 0 && !loading && (
          <h2>Your list of categories is empty...</h2>
        )}
      </div>
      {IsOpenAddPopup && (
        <div
          className={style.popup_wrapper}
          onClick={() => setIsOpenAddPopup(false)}
        >
          <CategoryAddPopup setIsOpenAddPopup={setIsOpenAddPopup} />
        </div>
      )}
    </div>
  );
};

export { CategoryList };
