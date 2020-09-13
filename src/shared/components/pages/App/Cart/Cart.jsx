import React, { useContext } from "react";
import { StoreContext } from "../../../../../contexts";

const Cart = () => {
  const { cart, dispatch } = useContext(StoreContext);
  return (
    <div>
      <h2>Cart {cart.length}</h2>
      {cart.map((menu, index) => (
        <div key={index}>
          <h2>{menu.name}</h2>
          <div>
            <button
              onClick={() => dispatch({ type: "REMOVE_ITEM", decItem: menu })}
            >
              dec
            </button>
            <button onClick={() => null}>{menu.qty}</button>
            <button onClick={() => null}>add</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
