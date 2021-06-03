import { Button, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../context/myContext";

type Props = {
  itemData: any;
};

const Styles = {
  addButton: {
    width: "100%",
    height: "50px",
    alignItems: "center",
  },
  imageContainer: {
    background: "white",
  },
};

export const ItemDetailsComponent = (props: Props) => {
  const cart: any = React.useContext(MyContext);
  const addItemToCart = (item: Item.Item) => () => {
    cart.cartItems.push(item);
  };
  return (
    <Grid
      container
      md={12}
      className="mainContainer"
      spacing={2}
      alignItems="center"
      justify="center"
    >
      <Grid item md={2} style={Styles.imageContainer}>
        <img alt={props.itemData?.title} src={props.itemData?.image} />
      </Grid>
      <Grid item md={9}>
        <Link to="/">
          <Button>Back to home</Button>
        </Link>
        <h1>{props.itemData?.title}</h1>
        <h4>Description: </h4>
        <p>{props.itemData?.description}</p>
        <h4>Category: </h4>
        <p className="tag">{props.itemData?.category}</p>
        <h3>Price: $ {props.itemData?.price}</h3>
        <br />
        <Button
          onClick={addItemToCart({
            id: props.itemData?.id,
            title: props.itemData?.title,
            price: props.itemData?.price,
            image: props.itemData?.image,
          })}
          style={Styles.addButton}
        >
          Add to cart
        </Button>
      </Grid>
    </Grid>
  );
};
