import { useContext } from "react";
import { ShopContext } from "../context/ShopContextProvider";
function Cart() {
  const {cartItems} = useContext(ShopContext);
  const totalCount = Object.values(cartItems).reduce((acc, count) => acc + count, 0);
  return <div>{totalCount}</div>;
}

export default Cart;
