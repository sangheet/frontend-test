import { Grid } from "@material-ui/core";
import React from "react";
import { ItemCard } from "./ItemCard";

type Props = {
  itemList: Item.Item[];
  setItemToCart: any;
};

export const ItemList = (props: Props) => {
  return (
    <Grid container md={12} className="mainContainer" spacing={2}>
      {props.itemList?.map((item, index) => {
        return (
          <ItemCard
            key={index}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            setToCart={props.setItemToCart}
          />
        );
      })}
    </Grid>
  );
};
