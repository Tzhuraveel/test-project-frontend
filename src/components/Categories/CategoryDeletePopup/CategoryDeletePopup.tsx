import { useMutation } from "@apollo/client";
import React, { FC } from "react";

import { DELETE_CATEGORY } from "../../../graphql";
import { client } from "../../../services";
import { DeletePopup } from "../../Supporting";

interface IProps {
  categoryId: number;
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryDeletePopup: FC<IProps> = ({ categoryId, setIsOpenPopup }) => {
  const [deletionCategory, { error }] = useMutation(DELETE_CATEGORY, {
    onCompleted: () => {
      client.resetStore().then();
    },
  });

  const deleteCategory = async (id: number) => {
    await deletionCategory({
      variables: {
        categoryId: id,
      },
    });
  };

  return (
    <DeletePopup
      error={error}
      itemName={"category"}
      setIsOpenPopup={setIsOpenPopup}
      deleteItem={deleteCategory}
      itemId={categoryId}
    />
  );
};

export { CategoryDeletePopup };
