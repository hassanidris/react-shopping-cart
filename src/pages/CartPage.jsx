import { Link } from "react-router-dom";
import { products } from "../data";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContextProvider";

export default function CartPage() {
  const {cartItems, removeFromCart, updateCartItemCount} = useContext(ShopContext);
  // if (!cartItems.length) {
  //   return (
  //     <div>
  //       <div>No Items in Cart!</div>
  //       <Link to="/">Back to Home</Link>
  //     </div>
  //   );
  // }

  // return cartItems.map((item) => {
  //   const foundItem = products.find((product) => {
  //     return product.id === item.id;
  //   });

  //   if (foundItem) {
  //     return (
  //       <CartItem
  //         count={item.count}
  //         product={foundItem}
  //         onAddRemove={onAddRemove}
  //       />
  //     );
  //   } else return undefined;
  // });
  return (
    <>
    <div className=" mt-5 flex flex-col gap-4">
        {products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
    </div>
    
    {/* <div className=" flex items-center mt-5 p-8 bg-white rounded-lg w-[50vw]"></div> */}
    </>
  );
}

function CartItem(props) {
  const {cartItems, removeFromCart, updateCartItemCount, addToCart} = useContext(ShopContext);
  const { id, name, price, image } = props.data;

  return (
    <div className=" flex items-center p-8 bg-white rounded-lg w-[50vw]">
      <img className=" border-2 m-1" width={75} height={75} src={image} alt={name} />
      <div className=" flex flex-col gap-2 ml-5">
        <p>
          <span className=" font-bold">{name}</span> - {price} SEK
        </p>
        <div className=" flex gap-2">
            <button onClick={() => removeFromCart(id)}> - </button>
            <input style={{border: '1px solid black'}} className=" w-10 text-center font-extrabold border-black border-spacing-2.5"
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button onClick={() => addToCart(id)}> + </button>
          </div>
      </div>
      {/* <button
        style={{ marginLeft: 20 }}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        + Add to cart
      </button> */}
    </div>
  );
}