/* 1. GroceriesAppContainer is the primary LOGICAL component. 
    This component will handle all the states and functions needed 
    to get this app working. This component will import the data 
    from products.js and pass it to the inventory component.  */

import {useState} from "react";
import ProductsContainer from "./ProductsContainer";
import CartContainer from "./CartContainer";
//import NavBar from "./Components/NavBar";   <-------- currently EMPTY

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
    /*
    Structure REFERENCE:
    id: "3017620422003",
    productName: "Nutella",
    brand: "Ferrero",
    quantity: "400 g",
    image: "link"
    price: "$5.99" 
    */

// the new state for the cart which starts as an empty array
const [cart, setCart] = useState ([]); 

// FCTN handles the ADD to quantity bttn onClick event when the user
// clicks the add bttn, the quantity will add one to the quantity property
// in the state that has the same ID
////////////////////////////////////////////////////
// mode IMPORTANT HERE: if already exists, add to quantity already in the cart
////////////////////////////////////////////////////
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
// FCTN handles the REMOVE to quantity bttn onClick event when the user
// clocks the add bttn, the quantity will remove one from the quantity property
// in the state that has the same ID
//
////////////////////////////////////////////////////
// mode: remove to min 1 if in cart, min 0 otherwise
////////////////////////////////////////////////////
    const handleRemoveFromQuantity = (productID, mode) => {
        const newProductQuantity = productQuantity.map((prod) => {
           /* if(prod.id === productID && prod.quantity>0){
                return {...prod, quantity: /*oldprod.quantity -1}*/
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

// FCTN handles adding a product to a cart
// each addition will take the product, quantity and total
    const handleAddToCart = (productToAdd) => {
        const currentProduct = data.find((prod) => prod.id === productToAdd.id);
        // check if it is in the cart already
        const productInCart = cart.find((item) => item.id === productToAdd.id);
        if(productToAdd.quantity === 0){
            alert("Please add quantity before adding to cart!");
            return;
        }

        if(!productInCart){ // if it's not in the cart, add it
            setCart((prevCart) => {
                return [
                    ...prevCart, 
                    {
                    ...currentProduct, 
                    quantity: productToAdd.quantity, 
                    currentPrice: productToAdd.currentPrice,
                },
            ];
        });
    } else{
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

// FCTN remove selected item from cart 
// REF: what it passes in on CartCard (discussed in lecture):
//      handleRemoveFromCart({id, product, quantity, currentPrice})

const handleRemoveFromCart = (cartItem) => {
    const filteredCart = cart.filter((item) => item.id !== cartItem.id);
    setCart(filteredCart);
};
    return (
    <div>
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
                handleAddToQuantity={handleAddToQuantity}
                handleRemoveFromQuantity={handleRemoveFromQuantity}/>
        </div>
    </div>
    );

const handleEmptyCart = () => {
    setCart([]); // empty array, same as beginning
};

let totalPrice = 0;
for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].quantity * cart[i].currentPrice; // currentPrice=NO $, price=$tring
}

}