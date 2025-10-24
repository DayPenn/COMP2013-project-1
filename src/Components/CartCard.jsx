/* 6. CartCard is a presentational component that displays 
    an image of the product, the price, the quantity, and 
    the sub-total of the products. It also features the 
    QuantityCounter component, which enables users to edit 
    the quantity of the same product they have added to 
    the cart, as well as a 'Remove Item' button that removes 
    the item from the cart. 
    
    NOTE: Products cannot be set to a value of 1 or less in CartCard.
    
REUSE same component for both ProductCard and CartCard components. */

import QuantityCounter from "./QuantityCounter";

export default function CartCard({
    id,
    productName,
    image, 
    quantity, 
    currentPrice,
    handleRemoveFromCart, 
    handleAddToQuantity,
    handleRemoveFromQuantity
}){
    return (
        <div className="CartCard">
            <img src={image} alt="" height="100px" />
            <h2>{productName}</h2>
            <p>Quantity: {quantity}</p>
            <p>Total Price: ${(quantity * currentPrice).toFixed(2)}</p>

            <QuantityCounter
                productQuantity={{id, quantity, currentPrice}}
                handleAddToQuantity={handleAddToQuantity}
                handleRemoveFromQuantity={handleRemoveFromQuantity}
                id={id}
                mode="cart"/>

            <button onClick={() => {
                handleRemoveFromCart({id, quantity, currentPrice}) // <-- from lecture
            }}
            >Remove Item</button>
        </div>
    );
}