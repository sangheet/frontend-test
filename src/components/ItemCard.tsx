import React from "react";

import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  price: number;
  image: string;
  id: string;
  setToCart?: any;
};

export const ItemCard = (props: Props) => {
  const setToCart = (item: Item.Item) => () => {
    props.setToCart(item);
  };

  return (
    <Grid container md={3} className="itemCard">
      <Grid md={12}>
        <Link to={`/item-details/${props.id}`}>
          <img alt={props.title} src={props.image} />
        </Link>
      </Grid>
      <Grid item md={12}>
        <Link to={`/item-details/${props.id}`}>
          <h1>{props.title}</h1>
        </Link>
      </Grid>
      <Grid item md={6}>
        <h2>$ {props.price}</h2>
      </Grid>
      <Grid item md={6}>
        <Button
          onClick={setToCart({
            id: props.id,
            title: props.title,
            price: props.price,
            image: props.image,
          })}
        >
          Add to cart
        </Button>
      </Grid>
    </Grid>
  );
};
