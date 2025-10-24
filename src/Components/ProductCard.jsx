/*4. ProductCard is a presentation component that 
    displays a single card with all the required elements. 
    It also contains a QuantityCounter component, 
    allowing the user to add multiple instances of the same product 
    to the cart. The component has an “Add to Cart” button; 
    when the user clicks on it, the product and its chosen quantities 
    should be added to the cart. The Cart should be updated with the 
    added amount if the product exists. For example, if the Coca-Cola 
    product has two quantities in the cart and you add another Coca-Cola 
    product with three quantities, the cart should update to five on 
    the Coca-Cola CartCard. If the user attempts to add a product 
    with zero items, an alert should be displayed, prompting the user 
    to enter a quantity before adding it to the cart. 
    
    NOTE: Products cannot be set to a value of zero or less in ProductCard.
    
REUSE same component for both ProductCard and CartCard components. */

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
        <QuantityCounter 
          productQuantity={productQuantity}  /*STATE*/
          handleAddToQuantity={handleAddToQuantity}
          handleRemoveFromQuantity={handleRemoveFromQuantity}
          id={productQuantity.id}
          mode="product"
        />
    <button onClick={() => handleAddToCart(productQuantity)}> Add to Cart</button>
    </div>
  );
}


