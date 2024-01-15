import { useContext } from "react";
import { ShopContext } from "../context/ShopContextProvider";
import { Link } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { IoInformationCircleOutline } from "react-icons/io5";

function Product(props) {
  console.log(props.data);
  const { id, name, price, image } = props.data;
  const {addToCart, cartItems} = useContext(ShopContext);
  
  return (
    
    <div className=" p-8 rounded-lg bg-white text-center flex flex-col items-center">
        <img className=" hover:scale-100 border-cyan-300 border-2" width={200} src={image} alt={name} />
        <h2 className="text-2xl font-semibold mt-4">{name}</h2>
        <p className=" p-2">{price} SEK</p>
        <p className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quos veniam veritatis, odio inventore, ullam labore voluptas tempore officia sequi aperiam..... <span className=" font-semibold">more</span> </p>
        <div className="flex text-sm gap-2 mt-4">
        <button className=" btn flex justify-center gap-1"
          onClick={(e) => {
            e.preventDefault();
            addToCart(id);
          }}
        >
          <TiShoppingCart size={20} /><span>Add to cart</span>
        </button>
            <Link to= {`/product/${id}`}>
        <button className=" btn flex justify-center gap-1">
          <IoInformationCircleOutline size={20} /><span>Details</span>
        </button>
    </Link>
        </div>
      </div>
  );
}

export default Product;
