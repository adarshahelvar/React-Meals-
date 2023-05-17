import React from "react";
import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import poster from '../images/posterBG.png';

const Header = (props) => {
  return (
    <>
      <div className="header_parent">
        <h2>React Meals</h2>
        <button className="your_cart_parent-main" onClick={props.cartClickHandler}> 
        <div className="your_cart_parent">
          <AiOutlineShoppingCart className="cartIcon" />
          <p className="cart_name">Your Cart </p>
          {/* <p className="counetr">{1}</p> */}
        </div>
        </button>
      </div>
      <div>
        <img src={poster} alt="poster" className="poster_img" />
        {/* <img 
          src="https://png.pngtree.com/thumb_back/fh260/back_pic/03/53/33/45579720d58a73c.jpg"
          alt="poster"
          className="poster_img"
        /> */}

        <div className="delicious_food">
          <div className="delicious_food_head">
            <h2>Delicios Food, Delivered To You</h2>
            <p>
              Choose your favorite meal from our broad selection of available
              meals and enjoy a delicious <br />
              lunch or dinner at home
            </p>
            <p>
              All our meals are cooked with high quality ingredients, just
              in-time and of course by <br /> experienced chefs !
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
