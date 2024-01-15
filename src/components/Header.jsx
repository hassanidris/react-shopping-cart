import { Link } from "react-router-dom";
import Cart from './Cart';
import { TiShoppingCart } from 'react-icons/ti';
import banner from '../assests/2.jpg';
import logo from '../assests/logo.png';
// import SimpleSlider from "./SimpleSlider";

function Header() {
  return (
    <div>
    <div className="flex h-16 p-2.5 text-xs text-white bg-cyan-600 justify-between items-center w-screen sticky top-0">
      {/* <div className=" font-serif text-3xl">Duck Shop</div> */}
      <div><img className=" absolute top-1 left-5" src={logo} width={120} /></div>
      <div className="flex items-end gap-2 text-xl pr-4">
        <Link to='/'><span className=" hover:text-cyan-950 font-normal">Shop</span></Link>
        <span> | </span>
        <Link to='/cart'><TiShoppingCart className=" hover:text-cyan-950" /></Link>
        <div className=" relative h-5 w-5 text-sm bg-cyan-800 rounded-[50%] -translate-y-3 -translate-x-3">
          <div className=" absolute right-2.5 top-0  translate-x-1/2">
            <Cart />
          </div>
        </div>
      </div>
    </div>
    <div className=" shadow-lg object-cover">
      <img src={banner} alt="" />
      {/* <SimpleSlider /> */}
      </div>
    </div>
  );
}

export default Header;
