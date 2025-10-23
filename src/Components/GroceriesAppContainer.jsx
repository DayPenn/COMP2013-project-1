/* 1. GroceriesAppContainer is the primary LOGICAL component. 
    This component will handle all the states and functions needed 
    to get this app working. This component will import the data 
    from products.js and pass it to the inventory component.  */

import {useState} from "react";
import "./App.css";
import data from "./data/products.js";
import ProductsContainer from "./ProductsContainer";
//import NavBar from "./Components/NavBar";
//import CartContainer from "./Components/CartContainer";

// Dayna Pennock
// Web Programming - Project 1 due October 24, 2025

export default function GroceriesAppContainer({data}){
    const [productQuantity, setProductQuantity] = useState(
        data.map((prod) =>{
            return {
                id: prod.id,
                quantity: prod.quantity,
                priceOptions: prod.priceOptions, 
    ///// priceOptions will not be used in PROJECT 1 /////
                currentPrice: prod.priceOptions[0]
            };
    /*
    Structure REFERENCE:
    id: "3017620422003",
    productName: "Nutella",
    brand: "Ferrero",
    quantity: "400 g",
    image: "link"
    price: "$5.99" 
    */
        })
    );

//const [cart, setCart] = useState ([]);

// FCTN handles select menu and options when user clicks on a price
// price will be stored in currentPrice property inside state that
// belongs to the card with the same ID ...
    const handleOnChangePrice = (productId, e) => {
        const newProdQuantity = productQuantity.map((prod)=>{
            if(prod.id === productId){
                return{...prod, currentPrice: e.target.value };
            }
            return prod;
        });
        setProductQuantity(newProdQuantity);
        return; // extra step to make sure the function will close, not necessary
    };
// FCTN handles the ADD to quantity bttn onClick event when the user
// clocks the add bttn, the quantity will add one to the quantity property
// in the state that has the same ID
    const handleAddToQuantity = (productID) => {
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
    const handleRemoveFromQuantity = (productID) => {
        const newProductQuantity = productQuantity.map((prod) => {
            if(prod.id === productID && prod.quantity>0){
                return {...prod, quantity: /*old*/prod.quantity -1}
            }
            return prod;
        });
        setProductQuantity(newProductQuantity);
        return;
    }

    return (
    <div>
        <ProductsContainer 
            data={data}
            productQuantity={productQuantity}
            setProductQuantity={setProductQuantity}
            handleOnChangePrice={handleOnChangePrice}
            handleAddToQuantity={handleAddToQuantity}
            handleRemoveFromQuantity={handleRemoveFromQuantity}
        />
    </div>
    );
}