import React from "react";

import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Grid } from "@material-ui/core";
import { MyContext } from "../context/myContext";

export default function Cart() {
  const cart: any = React.useContext(MyContext);
  const [anchorEl, setAnchorEl] =
    React.useState<HTMLButtonElement | null>(null);
  const [cartData, setCartData] = React.useState(cart.cartItems);

  React.useEffect(() => {
    setCartData(cart.cartItems);
  }, [cart.cartItems]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const total = cart.cartItems
    ?.map((item: Item.Item) => item.price)
    .reduce((subTotal: number, current: number) => subTotal + current, 0);

  const renderIcon = () => {
    return (
      <>
        <ShoppingCartIcon /> {cart.cartItems?.length}
      </>
    );
  };

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        {renderIcon()}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Grid container className="cartContainer">
          <ul className="cartList">
            {cartData?.length ? (
              cartData?.map((item: Item.Item, index: number) => {
                return (
                  <>
                    <li>
                      {item.title} / $ {item.price}
                    </li>
                    <br />
                  </>
                );
              })
            ) : (
              <li>
                <h4>You have no items in your cart</h4>
              </li>
            )}
            <Grid>
              <h4>Total: $ {total.toFixed(2) ?? 0}</h4>
            </Grid>
          </ul>
        </Grid>
      </Popover>
    </div>
  );
}
