export default function QuantityCounter({
  productQuantity /*state*/,
  handleAddToQuantity,
  handleRemoveFromQuantity,
  id /* which card we are working on*/,
  mode /* product=> min= 0, cart=> baseline 1 */,
}) {
  return (
    <div className="ProductQuantityDiv">
      <div className="counter-container">
        <button onClick={() => handleRemoveFromQuantity(id, mode)}>-</button>
        <span>{productQuantity.quantity}</span>
        <button onClick={() => handleAddToQuantity(id, mode)}>+</button>
      </div>
    </div>
  );
}
