import React from 'react';
import cartContext from './cart-context';

const CartProvider = (props) => {

    const addItemHandler =(item)=>{}

    const removeItemHandler =(id)=>{}
   
    const cartContext = {
        totalAmount:0,
        items: [],
        addItems: addItemHandler,
        removeItem: removeItemHandler
    }

  return (
    <cartContext.Provider value={cartContext}>
        {props.children}
    </cartContext.Provider>
  )
}

export default CartProvider