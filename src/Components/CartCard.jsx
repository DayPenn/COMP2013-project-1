import QuantityCounter from "./QuantityCounter";

export default function CartCard({
  id,
  productName,
  image,
  quantity,
  currentPrice,
  handleRemoveFromCart,
  handleAddToQuantity,
  handleRemoveFromQuantity,
}) {
  return (
    <div className="CartCard">
      <img src={image} alt="" height="100px" />
      <h2>{productName}</h2>
      <p>Quantity: {quantity}</p>
      <p>Total Price: ${(quantity * currentPrice).toFixed(2)}</p>
      <div className="CartCardInfo">
        <QuantityCounter
          productQuantity={{ id, quantity, currentPrice }}
          handleAddToQuantity={handleAddToQuantity}
          handleRemoveFromQuantity={handleRemoveFromQuantity}
          id={id}
          mode="cart"
        />
      </div>
      <button
        className="RemoveButton"
        onClick={() => {
          handleRemoveFromCart({ id, quantity, currentPrice }); // <-- from lecture
        }}
      >
        Remove Item
      </button>
    </div>
  );
}
