import { Link } from "react-router-dom";
import Cart from './Cart';
import { TiShoppingCart } from 'react-icons/ti';
import { useContext } from "react";
// import { ShopContext } from '../context/ShopContextProvider';

function Header() {
  // const { cartItems } = useContext(ShopContext);
  return (
    <div className="flex h-16 p-2.5 text-xs text-white bg-slate-900 justify-between items-center w-screen">
      <div className=" font-serif text-3xl">Duck Shop</div>
      <div className="flex items-end gap-2 text-xl pr-4">
        <Link to='/'>Shop</Link>
        <span> | </span>
        <Link to='/cart'><TiShoppingCart /></Link>
        <div className=" relative h-5 w-5 text-sm bg-cyan-800 rounded-[50%] -translate-y-3 -translate-x-3">
          <div className=" absolute right-2.5 top-0  translate-x-1/2">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
