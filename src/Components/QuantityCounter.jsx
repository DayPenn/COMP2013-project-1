/*7. Quantity Counter is a presentational component 
    that displays the number of items for each product. 
    It has a button to increase the amount and 
    another to decrease the number of products.  
    
    NOTE: will accept both button FCTNs, add / remove
    and the state
    */

export default function QuantityCounter({
    productQuantity, /*state*/
    handleAddToQuantity, 
    handleRemoveFromQuantity,
    id, /* which card we are working on*/
    mode, /* product=> min= 0, cart=> baseline 1 */
}) {
    return (
        <div className="ProductQuantityDiv">
        <div>
            <button onClick={() => handleRemoveFromQuantity(id, mode)}>-</button>
            <span>{productQuantity.quantity}</span>
            <button onClick={() => handleAddToQuantity(id, mode)}>+</button>
        </div>
        </div>
    );
}