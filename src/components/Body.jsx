import { Link } from "react-router-dom";

import Product from "./Product";
import { products } from "../data";

function Body({ onAdd }) {
  return (
    <div style={{margin: '0 auto', width: '60wv'}} className="flex p-5">
      <div className="flex flex-wrap gap-3">
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