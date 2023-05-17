import React, { useState } from "react";
import "./CartItems.css";

const CartItems = (props) => {
  const { cartItem, setCartItem } = props;

  const orderHandler = () => {
    setCartItem([]);
  };
  
  console.log(cartItem);
  return (
    <div className="items">
      <div className="shadow p-3 mb-5 bg-body rounded items-child-wrap">
        {cartItem.length > 0 ? cartItem.map((curElm) => (
          <div key={Math.random()} className="items-child">
            <div>{curElm.foodTitle}</div>
            <div>{curElm.price}</div>
          </div>
          // console.log(curElm)
        )) : <p>Cart is Empty...</p>}
        <div className="ms-5 btn-parent">
          <button className="btn btn-danger ms-5" onClick={props.closeHandler}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
