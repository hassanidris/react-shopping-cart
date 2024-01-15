import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import Product from "../components/Product";
import { products } from "../data";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContextProvider";

const ItemPage = () => {
  const {cartItems, addToCart} = useContext(ShopContext);
  console.log(cartItems);
  const { id } = useParams();
  const [item, setItem] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('aaaaaa', id, products);
    const foundItem = products.find((p) => {
      return p.id === +id;
    });
    setItem(foundItem);
  }, [id]);

  if (!item) return <div>Item not found</div>;

  const { name, description, price, image } = item;
  console.log('item', item)
  return (
    <div className=" bg-white w-[80vw] mt-5 p-8">
      <div className="flex justify-center gap-8">
        {/* <Product data={item.image} /> */}
        <div className=" w-[40%]">
          <img className="border-2 border-cyan-400" src={image} alt={name} />
        </div>
        <div className="w-[60%] flex flex-col justify-between">

          <div>
            <h2 className="text-3xl font-bold mb-3">{name}</h2>
            <p className=" italic text-gray-500">Price: ${price}</p>
            <p>---</p>
            <p>{description}</p>
          </div>
          <div className=" flex justify-end gap-3 text-center">
            <button className="btn mt-3"
            onClick={(e) => {
              e.preventDefault();
              addToCart(id);
            }}
                    >
            + Add to cart
                    </button>
                    <button className="btn mt-3" onClick={() => navigate('/')}>Contiune Shopping</button>
          </div>
          {/* You can add more details here based on your product structure */}
        </div>
      </div>
    </div>
  );
}

export default ItemPage