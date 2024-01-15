
import { products } from "../data";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContextProvider";
import { useNavigate } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";
import { TbShoppingBagSearch } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";

export default function CartPage() {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const navigate = useNavigate();

  const totalAmount = getTotalCartAmount();

  console.log('total' , totalAmount);
  
  return (
    <>
    <div className="flex flex-col gap-4">
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
    </div>
    {totalAmount > 0 ? (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg w-[60vw]">
      <p><span className=" font-bold">Total =</span> {totalAmount} SEK</p>
      <div className=" flex gap-4">
      <button className="btn flex justify-center gap-1" onClick={() => navigate('/')}> <TbShoppingBagSearch size={20} /><span>Contiune Shopping</span></button>
        <button className="btn flex justify-center gap-1"><RiSecurePaymentLine size={20} /> <span>Proceed Checkout</span></button>
      </div>
    </div> ) : (
      <h1> Your Shopping Cart is Empty</h1>
      )}
    </>
  );
}

function CartItem(props) {
  const {cartItems, removeFromCart, updateCartItemCount, addToCart, removeAllFromCart} = useContext(ShopContext);
  const { id, name, price, image } = props.data;

  return (
    <div className="flex justify-between items-center p-8 bg-white rounded-lg w-[60vw]">
      <div className=" flex items-center">
        <img className=" border-2 m-1" width={75} height={75} src={image} alt={name} />
        <div className=" flex flex-col gap-5 ml-5">
          <p>
            <span className=" font-bold text-lg">{name}</span> - {price} SEK
          </p>
          <div className=" flex gap-2">
              <button className=" text-xl font-bold text-cyan-600 hover:text-white hover:bg-cyan-600 px-2" onClick={() => removeFromCart(id)}> - </button>
              <input style={{border: '1px solid rgba(9, 146, 177, 0.367)'}} className=" w-10 text-center font-bold border-black border-spacing-2.5 text-cyan-600"
                value={cartItems[id]}
                onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
              />
              <button className=" text-xl font-bold text-cyan-600 hover:text-white hover:bg-cyan-600 px-2" onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
      </div>
      <button onClick={() => removeAllFromCart(id)}><IoTrashOutline size={25} className=" text-cyan-600 hover:text-cyan-950" /></button>
      
    </div>
  );
}