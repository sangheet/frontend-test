import axios from "axios";

export const getItemList = (setItemsData: any) => {
  axios("https://fakestoreapi.com/products")
    .then((response) => {
      setItemsData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
export const getItemData = (setItem: any, id: number) => {
  axios(`https://fakestoreapi.com/products/${id}`)
    .then((response) => {
      setItem(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};
