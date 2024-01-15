
import { products } from "../data";
import Product from '../components/Product';

function Shop(id) {
  // console.log('here products', products);
  return (
    <div className=" w-[70vw] flex p-5 justify-center">
      <div className=" grid grid-cols-3 gap-5">
      {products.map((product) => (
          <div className=" shadow-lg">
            <Product data={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;