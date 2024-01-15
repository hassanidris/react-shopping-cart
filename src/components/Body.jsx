import { Link } from "react-router-dom";

import Product from "./Product";
import { products } from "../data";

function Body({ onAdd }) {
  return (
    <div style={{margin: '0 auto'}} className="flex p-5 justify-center">
      <div className=" grid grid-cols-3 gap-3">
      {products.map((product) => {
        const { id } = product;

        return (
          <Link to={`/product/${id}`} key={id}>
            <Product product={product} onAdd={onAdd} />
          </Link>
        );
      })}
      </div>
    </div>
  );
}

export default Body;