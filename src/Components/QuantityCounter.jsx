/*7. Quantity Counter is a presentational component 
    that displays the number of items for each product. 
    It has a button to increase the amount and 
    another to decrease the number of products.  
    
    NOTE: will take both buttons, add / remove
    and the state
    */

export default function QuantityCounter({
    productQuantity, /*state*/
    handleAddToQuantity, 
    handleRemoveFromQuantity,
    id, /* which card we are working on*/
    mode, /* product=>baseline 0, cart=> baseline 1 */
}) {
    return (
        <div className="ProductQuantityDiv">
        <div>
            <button onClick={() => handleRemoveQuantity(id, mode)}>-</button>
        </div>        
        <div>
            <button onClick={() => handleAddQuantity(id, mode)}>+</button>
        </div>
        </div>
    );
}