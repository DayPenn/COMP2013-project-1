import QuantityCounter from "./QuantityCounter";

export default function ProductCard({
  productQuantity, 
  image, 
  productName, 
  handleAddToQuantity, 
  handleRemoveFromQuantity,
  handleAddToCart
}) {
  return (
    <div className="ProductCard">
      <img src={image} alt="" height="100px" />
      <h3>{productName}</h3>
      <p>Quantity: {productQuantity.quantity}</p>
      <p>
        Total Price: $
        {(productQuantity.quantity * productQuantity.currentPrice).toFixed(2)}
      </p>
      <div className="ProductQuantityDiv">
          <QuantityCounter 
            productQuantity={productQuantity}  /*STATE*/
            handleAddToQuantity={handleAddToQuantity}
            handleRemoveFromQuantity={handleRemoveFromQuantity}
            id={productQuantity.id}
            mode="product"
          />
      </div>
    <button onClick={() => handleAddToCart(productQuantity)}> Add to Cart</button>
    </div>
  );
}


