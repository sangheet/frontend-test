import React from "react";

import { Grid } from "@material-ui/core";
import { CartComponent } from "./CartComponent";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Grid container className="navBar" alignItems="center" spacing={2}>
      <Grid item md={1}>
        <MenuIcon />
      </Grid>
      <Grid item md={10}>
        <Link to="/">
          <h1 className="logo">MY SHOP</h1>
        </Link>
      </Grid>
      <Grid item md={1}>
        <CartComponent />
      </Grid>
    </Grid>
  );
};
