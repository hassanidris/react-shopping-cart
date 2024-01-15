import { useContext } from "react";
import { ShopContext } from "../context/ShopContextProvider";

function Product(props) {
  const { id, name, price, image } = props.data;
  const {addToCart, cartItems} = useContext(ShopContext);
  return (
    <div className=" p-8 shadow-lg rounded-lg bg-white text-center flex flex-col items-center hover:bg-gray-200">
      <img width={200} src={image} alt={name} />
      <h2 className="text-2xl font-semibold mt-4">{name}</h2>
      <p className=" p-2">{price} SEK</p>
      <div className="flex text-sm gap-2">
      <button className=" bg-transparent px-2.5 py-1 border-2 border-solid border-gray-900 rounded-2xl hover:bg-gray-900 hover:text-white hover:cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          addToCart(id);
        }}
      >
        + Add to cart
      </button>
      </div>
    </div>
  );
}

export default Product;
