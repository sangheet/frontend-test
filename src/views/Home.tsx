import React from "react";
import { Template } from "../components/Template";
import { getItemList } from "../services/services";
import { MyContext } from "../context/myContext";
import { ItemList } from "../components/ItemList";
import { useHistory } from "react-router";

export const Home = () => {
  const history = useHistory();
  const [itemList, setItemList] = React.useState<any[]>([]);
  const cart: any = React.useContext(MyContext);
  const addItemToCart = (item: string) => {
    cart.cartItems.push(item);
    history.push("/");
  };
  React.useEffect(() => {
    getItemList(setItemList);
  }, []);
  return (
    <Template
      child={<ItemList itemList={itemList} setItemToCart={addItemToCart} />}
    />
  );
};
