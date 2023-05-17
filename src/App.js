import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Items from "./component/Items";
import CartItems from "./component/CartItems";
import { useState } from "react";
import CartProvider from "./component/store/cartProvider";

let items = [
  {
    key: "m1",
    foodTitle: "Sushi",
    foodDescription: "Finest fish and veggies",
    price: 109.99,
  },
  {
    key: "m2",
    foodTitle: "Idli",
    foodDescription: "Steamed rice and fermented lentil",
    price: 45.0,
  },
  {
    key: "m3",
    foodTitle: "Dosa",
    foodDescription: "Fermented batter of ground lentils and rice.",
    price: 60.0,
  },
  {
    key: "m4",
    foodTitle: "Puri",
    foodDescription: "Deep-fried wheat flour bread",
    price: 30.0,
  },
  {
    key: "m5",
    foodTitle: "Pongal",
    foodDescription: "Sweet dish made with Rice",
    price: 70.0,
  },
  {
    key: "m6",
    foodTitle: "Lemon Rice",
    foodDescription: "Rice with Penutes",
    price: 40.0,
  },
];

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItem, setCartItem] = useState([]);

  const cartClickHandler = () => {
    setShowCart(true);
  };

  const closeHandler = () => {
    setShowCart(false);
  };
  const oredrHandler = () => {
    setCartItem([]);
  };

  return (
    // <CartProvider>
    <>
      {showCart && (
        <CartItems
          closeHandler={closeHandler}
          cartItem={cartItem}
          setCartItem={setCartItem}
          oredrHandler={oredrHandler}
        />
      )}
      <Header cartClickHandler={cartClickHandler} />
      <Items items={items} setCartItem={setCartItem} />
    </>
    // </CartProvider>
  );
}

export default App;
