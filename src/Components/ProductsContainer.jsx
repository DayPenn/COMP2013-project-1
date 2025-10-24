/* 3. ProductsContainer is a presentation component 
    that renders all the product cards from the data 
    passed from the parent component. */

import ProductCard from "./ProductCard";

export default function ProductsContainer({ 
  data, 
  productQuantity,
  handleAddToQuantity,
  handleRemoveFromQuantity, 
  handleAddToCart
}) {
  return (
    <div className="ProductsContainer">
      {data.map((product) => (
        <ProductCard 
          key={product.id} 
          {...product} 
          productQuantity={productQuantity.find(
            (prod)=> prod.id === product.id)} 
          handleAddToQuantity={handleAddToQuantity}
          handleRemoveFromQuantity={handleRemoveFromQuantity}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}