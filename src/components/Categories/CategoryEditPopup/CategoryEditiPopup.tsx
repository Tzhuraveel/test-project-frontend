import { useMutation } from "@apollo/client";
import React, { FC } from "react";

import { EDIT_CATEGORY } from "../../../graphql";
import { client } from "../../../services";
import css from "../../multiple-styles/popup.module.css";
import { CategoryForm } from "../CategoryForm/CategoryForm";
import { ICategory } from "../CategoryList/categoryInterface";
import { ICategoryInitialValue } from "../interfaces/category-initial-value.interface";

interface IProps {
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  category: ICategory;
}

const CategoryEditPopup: FC<IProps> = ({ category, setIsOpenPopup }) => {
  const initialValues: ICategoryInitialValue = { name: "" };

  const [edit, { error }] = useMutation(EDIT_CATEGORY, {
    errorPolicy: "all",
    onCompleted: () => {
      client.resetStore().then();
    },
  });

  const submit = async (value: ICategoryInitialValue): Promise<void> => {
    await edit({
      variables: {
        categoryId: category.id,
        editCategory: {
          name: value.name,
        },
      },
    });

    if (!error) {
      setIsOpenPopup(false);
    }
  };

  return (
    <div className={css.popup_wrapper} onClick={() => setIsOpenPopup(false)}>
      <CategoryForm
        setIsOpenPopup={setIsOpenPopup}
        initialValues={initialValues}
        errorFromDb={error}
        submit={submit}
        categoryInfo={{
          nameCloseButton: "cancel",
          nameActionButton: "edit",
          popupTitle: `Edit ${category.name} category`,
        }}
      />
    </div>
  );
};

export { CategoryEditPopup };
