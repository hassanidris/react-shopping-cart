import { Link } from "react-router-dom";
import Cart from './Cart';
import { TiShoppingCart } from 'react-icons/ti';

function Header({ cartItems }) {
  return (
    <div className="flex h-16 p-2.5 text-xs text-white bg-slate-900 justify-between items-center">
      <div className=" font-serif text-3xl">Duck Shop</div>
      <div className="flex items-end gap-2 text-lg" style={{ marginLeft: "auto" }}>
        <Link to='/'>Shop</Link>
        <span> | </span>
        <Link to='/cart'><TiShoppingCart /></Link>
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
}

export default Header;
