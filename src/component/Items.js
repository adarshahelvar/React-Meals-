import React, { useState } from "react";
import "./Items.css";
import CartItems from "./CartItems";
import Header from "./Header";

const Items = (props) => {
  const [cartItem, setCartItem] = useState([]);

  const order = () => {
    setCartItem([]);
    props.setCartItem([]);
  };

  const items = props.items;

  const addFoodHandler = (elm) => {
    setCartItem([...cartItem, elm]);
    props.setCartItem([...cartItem, elm]); //this setCartItem coming from app.js
  };
  // console.log(cartItem);
  return (
    <div>
      {cartItem.length>0 ?(<button className="bttn_order" onClick={() => order()}>
       🛒 BUY NOW
      </button>):<p></p>}
      <div className="container items_parent">
        {items.map((elm) => (
          <div className="items_parent2" key={elm.key}>
            <div className="elemt">
              <button className="bttn" onClick={() => addFoodHandler(elm)}>
                Add
              </button>
              <h2 className="foodtitle">{elm.foodTitle}</h2>
              <h3 className="foodprice">{`₹ ${elm.price}`}</h3>
              <h4 className="foodDescription">{elm.foodDescription}</h4>
            </div>
          </div>
        ))}

        {/* <CartItems /> */}
      </div>
    </div>
  );
};

export default Items;
