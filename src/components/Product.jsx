
function Product({ product, onAdd }) {
  const { name, price, image } = product;
  return (
    <div className=" p-8 shadow-lg rounded-lg bg-white text-center">
      <img width={200} src={image} alt={name} />
      <h2 className="text-2xl font-semibold mt-4">{name}</h2>
      <p className=" p-2">{price} SEK</p>
      <div className="flex text-sm gap-2">
      <button
        onClick={(e) => {
          e.preventDefault();
          onAdd(product, 1);
        }}
      >
        + Add to cart
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          onAdd(product, -1);
        }}
      >
        - Remove from cart
      </button>
      </div>
    </div>
  );
}

export default Product;
