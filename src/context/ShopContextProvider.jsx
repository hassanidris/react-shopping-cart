import React, {createContext, useState} from "react";
import { products } from "../data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i=1; i<products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}
const ShopContextProvider = (products) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // const getTotalCartAmount = () => {
  //   let totalAmount = 0;
  //   for (const item in cartItems) {
  //     if (cartItems[item] > 0) {
  //       let itemInfo = products.find((product) => product.id === Number(item));
  //       totalAmount += cartItems[item] * itemInfo.price;
  //     }
  //   }
  //   return totalAmount;
  // };

  // const getTotalCartAmount = () => {
  //   let totalAmount = 0;
  //   for (const item in cartItems) {
  //     let itemInfo = products.find((product) => product.id === item);
  //     if (itemInfo && cartItems[item] > 0) {
  //       totalAmount += cartItems[item] * itemInfo.price;
  //     }
  //   }
  //   return totalAmount;
  // };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId]+ 1}));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId]- 1}));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount};

  console.log(cartItems);
  return (
  <ShopContext.Provider value={contextValue}>
      {products.children}
    </ShopContext.Provider>);
};

export default ShopContextProvider;