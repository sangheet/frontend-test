import React from "react";
import { useParams } from "react-router";
import { ItemDetailsComponent } from "../components/ItemDetailsComponent";
import { Template } from "../components/Template";
import { getItemData } from "../services/services";

export const ItemDetails = () => {
  let { id } = useParams();
  const [itemData, setItemData] = React.useState<Item.Item>();

  React.useEffect(() => {
    getItemData(setItemData, id);
  }, [id]);

  return <Template child={<ItemDetailsComponent itemData={itemData} />} />;
};
