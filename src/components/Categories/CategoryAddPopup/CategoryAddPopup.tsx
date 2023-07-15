import { useMutation } from "@apollo/client";
import React, { FC } from "react";

import { ADD_CATEGORY } from "../../../graphql";
import { client } from "../../../services";
import { CategoryForm } from "../CategoryForm/CategoryForm";
import { ICategoryInitialValue } from "../interfaces/category-initial-value.interface";

interface IProps {
  setIsOpenAddPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryAddPopup: FC<IProps> = ({ setIsOpenAddPopup }) => {
  const initialValues: ICategoryInitialValue = { name: "" };

  const [addCategory, { error }] = useMutation(ADD_CATEGORY, {
    errorPolicy: "all",
    onCompleted: () => {
      client.resetStore().then();
    },
  });

  const submit = async (value: ICategoryInitialValue): Promise<void> => {
    await addCategory({
      variables: {
        createCategory: {
          name: value.name,
        },
      },
    });

    if (!error) {
      setIsOpenAddPopup(false);
    }
  };

  return (
    <CategoryForm
      setIsOpenPopup={setIsOpenAddPopup}
      initialValues={initialValues}
      errorFromDb={error}
      submit={submit}
      categoryInfo={{
        nameCloseButton: "cancel",
        nameActionButton: "add",
        popupTitle: "Add new category",
      }}
    />
  );
};

export { CategoryAddPopup };
