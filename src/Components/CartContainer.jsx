/*5. CartContainer is a presentation component. 
    This component will render the list of items chosen by the user. 
    If the cart is empty, the component will show “No items in the cart.” 
    Otherwise, it will display the number of items in the cart, 
    with each item represented by a CartCard component. 
    There are also two buttons at the end of the list: 

    a. Empty the cart button. When clicked, the cart empties. 

    b. Buy button that shows the total price, which has no functionality.*/

import CartCard from "./CartCard";

export default function CartContainer({
    cart,
    handleRemoveFromCart,
}) {
    return (
        <div className="CartContainer">
            {cart.map((item) => (
            <CartCard 
            key={item.id} 
            {...item}
            handleRemoveFromCart={handleRemoveFromCart}/>
            ))}
        </div>
    );
}