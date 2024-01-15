import { useContext } from "react";
import { ShopContext } from "../context/ShopContextProvider";
import { Link } from "react-router-dom";

function Product(props) {
  console.log(props.data);
  const { id, name, price, image } = props.data;
  const {addToCart, cartItems} = useContext(ShopContext);
  
  return (
    
    <Link to= {`/product/${id}`}>
      <div className=" p-8 rounded-lg bg-white text-center flex flex-col items-center hover:bg-gray-200">
        <img className=" hover:scale-100" width={200} src={image} alt={name} />
        <h2 className="text-2xl font-semibold mt-4">{name}</h2>
        <p className=" p-2">{price} SEK</p>
        <div className="flex text-sm gap-2">
        <button className=" btn"
          onClick={(e) => {
            e.preventDefault();
            addToCart(id);
          }}
        >
          + Add to cart
        </button>
        </div>
      </div>
    </Link>
  );
}

export default Product;
