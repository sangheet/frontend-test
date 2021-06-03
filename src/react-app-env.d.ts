/// <reference types="react-scripts" />
declare module "@material-ui/icons/ShoppingCart";
declare module "react-router";

declare namespace Item {
  interface Item {
    id: string;
    title: string;
    price: number;
    image: string;
    description?: string;
    category?: string;
  }
}
