import React from "react";

import { Grid } from "@material-ui/core";
import Cart from "./Cart";

export const CartComponent = () => {
  return (
    <Grid container md={12}>
      <Cart />
    </Grid>
  );
};
