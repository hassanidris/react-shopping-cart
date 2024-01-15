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
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        console.log(Array.isArray(products));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
        } else {
          console.error(`Product with id ${Number(item)} not found.`);
        }
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId]+ 1}));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId]- 1}));
  };

  // const removeAllFromCart = (itemId) => {
  //   setCartItems((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
  // };

  const removeAllFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, removeAllFromCart};

  console.log(cartItems);
  return (
  <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>);
};

export default ShopContextProvider;