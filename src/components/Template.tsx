import { Grid } from "@material-ui/core";
import React from "react";
import { NavBar } from "./NavBar";

type Props = {
  child: any;
};

export const Template = (props: Props) => {
  return (
    <Grid container md={12}>
      <NavBar />
      {props.child}
    </Grid>
  );
};
