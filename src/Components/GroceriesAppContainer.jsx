import {useState} from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
import NavBar from "./NavBar";
import emptyCartIMG from "../assets/cart-empty.png";
import fullCartIMG from "../assets/cart-full.png";
// Dayna Pennock
// Web Programming - Project 1 due October 24, 2025

export default function GroceriesAppContainer({data}){
    const [productQuantity, setProductQuantity] = useState(
        data.map((prod) =>{
            return {
                id: prod.id,
                quantity: 0,
//////// parse price from $ - slice alone did NOT work, neither does MIX... re-watch Lab 1 walk-through
                currentPrice: parseFloat(prod.price ? prod.price.slice(1) : 0), 
// cutting off $ from start, turnary to ensure never NULL, if price exists=> adjust, else price=0.
            };
        })
    );
// the new state for the cart which starts as an empty array
const [cart, setCart] = useState ([]); 

    const handleAddToQuantity = (productID, mode) => {
        const newProductQuantity = productQuantity.map((prod) => {
            if(prod.id === productID){
                return {...prod, quantity: /*old*/prod.quantity +1}
            }
            return prod;
        });
        setProductQuantity(newProductQuantity);
        return;
    }

    const handleRemoveFromQuantity = (productID, mode) => {
        const newProductQuantity = productQuantity.map((prod) => {
            if(prod.id === productID){
                const minQuantity = mode === "cart" ? 1 : 0; // cart min=1, otherwse min=0
                if (prod.quantity > minQuantity) {
                    return {...prod, quantity: prod.quantity -1}; // minus 1
                }else{
                    return {...prod, quantity: minQuantity}; // no change
                }
                }
            return prod;
        });
        setProductQuantity(newProductQuantity);
        return;
    }

    const handleAddToCart = (productToAdd) => {
        const currentProduct = data.find((prod) => prod.id === productToAdd.id);
        // check if it is in the cart already
        const productInCart = cart.find((item) => item.id === productToAdd.id);
        if(productToAdd.quantity === 0){
            alert("Please add quantity before adding to cart!");
            return;
        }
            if (!productInCart) { // if not in the cart,add it
                setCart((prevCart) => {
                    return [
                        ...prevCart,
                        {
                            ...currentProduct,
                            quantity: productToAdd.quantity,
                            currentPrice: productToAdd.currentPrice
                        }
                    ];
                });
            } else {
        // if item already exisits, add new quantity to the existing cart total
        setCart((prevCart) =>
            prevCart.map((item) =>
            (item.id === productToAdd.id)
            ? {...item, quantity: item.quantity + productToAdd.quantity}
            : item
            )
        );
    }
};

// update quantity in cart
// ADD to quantity
const handleAddToQuantityInCart = (id) => {
    setCart((prevCart) => 
        prevCart.map((item) =>
        item.id === id 
        ? {...item, quantity: item.quantity +1}
        : item
        )
    );
};

const handleRemoveFromQuantityInCart = (id) => {
    setCart((prevCart) => 
        prevCart.map((item) =>
        item.id === id 
        ? {...item, quantity: item.quantity > 1 ? item.quantity -1 : 1 } // base min in cart = 1
        : item
        )
    );
};


// FCTN remove selected item from cart 
// REF: what it passes in on CartCard (discussed in lecture):
//      handleRemoveFromCart({id, product, quantity, currentPrice})

const handleRemoveFromCart = (cartItem) => {
    const filteredCart = cart.filter((item) => item.id !== cartItem.id);
    setCart(filteredCart);
};

////// EMPTY cart button
const handleEmptyCart = () => {
    setCart([]); // empty array, same as beginning
};

/////// CALC Total Price of Cart to display in BUY button
let totalPrice = 0;
for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].quantity * cart[i].currentPrice; // currentPrice=NO $, price=$tring
}

    return (
    <div>
        <NavBar 
        cart={cart}
        emptyCartIMG={emptyCartIMG}
        fullCartIMG={fullCartIMG}
        />
        <div>
        <ProductsContainer 
            data={data}
            productQuantity={productQuantity}
            setProductQuantity={setProductQuantity}
            handleAddToQuantity={handleAddToQuantity}
            handleRemoveFromQuantity={handleRemoveFromQuantity}
            handleAddToCart={handleAddToCart}
        />
        </div>
        <div>
            <h1>Cart</h1>
            <p>{cart.length === 0 && "Cart is empty."}</p>
            <CartContainer 
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                handleAddToQuantityInCart={handleAddToQuantityInCart}
                handleRemoveFromQuantityInCart={handleRemoveFromQuantityInCart}
                handleEmptyCart={handleEmptyCart}
                totalPrice={totalPrice}/>
        </div>
    </div>
    );
}