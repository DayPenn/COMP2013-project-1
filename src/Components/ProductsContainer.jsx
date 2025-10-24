import ProductCard from "./ProductCard";

export default function ProductsContainer({
  data,
  productQuantity,
  handleAddToQuantity,
  handleRemoveFromQuantity,
  handleAddToCart,
}) {
  return (
    <div className="ProductsContainer">
      {data.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          productQuantity={productQuantity.find(
            (prod) => prod.id === product.id
          )}
          handleAddToQuantity={handleAddToQuantity}
          handleRemoveFromQuantity={handleRemoveFromQuantity}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}
