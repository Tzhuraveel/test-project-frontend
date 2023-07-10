import { useQuery } from "@apollo/client";
import { Button } from "@mui/material";
import { FC, useEffect, useState } from "react";

import { GET_ALL_CATEGORIES } from "../../../graphql";
import { CategoryAddPopup } from "../CategoryAddPopup/CategoryAddPopup";
import { CategoryItem } from "../CategoryItem/CategoryItem";
import css from "./Categories.module.css";
import { ICategory, IQueryCategories } from "./categoryInterface";

const CategoryList: FC = () => {
  // const { data, loading } = useQuery<IQueryCategories>(GET_ALL_CATEGORIES, {
  //   errorPolicy: "all",
  // });

  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    async function getAll() {
      const { data, loading } = useQuery<IQueryCategories>(GET_ALL_CATEGORIES, {
        errorPolicy: "all",
      });
      //
      // setCategories(data?.getAllCategories);
    }
    getAll().then();
  }, []);

  return (
    <div className={css.categories__wrapper}>
      <div className={css.categories__header}>
        <Button
          className={css.button__add_category}
          variant="contained"
          onClick={() => setIsOpenPopup(true)}
        >
          Add category
        </Button>
      </div>
      <div className={css.categories__container}>
        {categories.length !== 0 &&
          categories.map((category: ICategory) => (
            <CategoryItem category={category} key={category.id} />
          ))}
      </div>
      {isOpenPopup && (
        <CategoryAddPopup
          setIsOpenPopup={setIsOpenPopup}
          setCategories={setCategories}
        />
      )}
    </div>
  );
};

export { CategoryList };
