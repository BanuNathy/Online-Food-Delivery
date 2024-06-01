import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartItems,setCartItems] = useState({});

    // Add to cart functionality

        const addToCart = (itemId) => {
           // If the user will add the item first time in the cart, this statement will be executed
           if (!cartItems[itemId]) {
            setCartItems((prev)=>({...prev,[itemId]:1}))
           } 
           // Suppose any product item is already available an quantity is one, In that case we will incease one. That time this statement will e executed
            else{
                setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
            }
        }


    // Remove from cart
         const removeFromCart = (itemId) => {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
         }   

         const getTotalCartAmount = () => {
            let totalAmount = 0;
            for (const item in cartItems) {
                if (cartItems[item] > 0) {
                    let itemInfo = food_list.find((product) => product._id === item);
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
            return totalAmount;
         }


         
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }  

    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContextProvider ;