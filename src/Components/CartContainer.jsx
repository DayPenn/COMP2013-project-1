import CartCard from "./CartCard";

export default function CartContainer({
  cart,
  handleRemoveFromCart,
  handleAddToQuantityInCart,
  handleRemoveFromQuantityInCart,
  handleEmptyCart,
  totalPrice,
}) {
  return (
    <div className="CartContainer">
      {cart.map((item) => (
        <CartCard
          key={item.id}
          {...item}
          handleRemoveFromCart={handleRemoveFromCart}
          handleAddToQuantity={handleAddToQuantityInCart} // specifying -from CART
          handleRemoveFromQuantity={handleRemoveFromQuantityInCart} // -from cart
        />
      ))}
      {/*TURNARY gets confusing here, replaced with short circuit*/}
      {cart.length > 0 /*<--if left=TRUE, do RIGHT side, too*/ && (
        <div className="CartListBtns">
          <button onClick={handleEmptyCart}>EMPTY Cart</button>
          <button className="BuyButton">
            BUY (Total: ${totalPrice.toFixed(2)})
          </button>
        </div>
      )}
    </div>
  );
}
