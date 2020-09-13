import React, { useContext, useState, useEffect, useCallback } from "react";
import { StoreContext } from "../../../../../contexts";

const TokoDua = () => {
  const { cart, dispatch } = useContext(StoreContext);
  const [tokoDuaQty, setTokoDuaQty] = useState([]);
  const tokoDua = [
    { id: 1, name: "kimchi", price: 100 },
    { id: 2, name: "tokboki", price: 200 },
    { id: 3, name: "sushi", price: 350 },
  ];

  useEffect(() => {
    if (tokoDuaQty.length < 1) {
      tokoDua.forEach((x) => {
        x.qty = 0;
      });
      cart.forEach((x) => {
        tokoDua.forEach((y) => {
          if (y.id === x.id) {
            y.qty = x.qty + y.qty;
          }
        });
      });
      setTokoDuaQty(tokoDua);
    }
  }, [tokoDua, cart, tokoDuaQty]);

  const addQty = (menu) => {
    callbackAddQty(menu);
    dispatch({ type: "ADD_QTY", addstuff: menu.id });
  };

  const callbackAddQty = useCallback((menu) => {
    setTokoDuaQty((old) =>
      old.map((x) => (x.id === menu.id ? { ...x, qty: x.qty + 1 } : x))
    );
  }, []);

  const decQty = (menu) => {
    callbackDecQty(menu);
    dispatch({ type: "REMOVE_QTY", decstuff: menu.id });
  };

  const callbackDecQty = useCallback((menu) => {
    setTokoDuaQty((old) =>
      old.map((x) => (x.id === menu.id ? { ...x, qty: x.qty - 1 } : x))
    );
  }, []);

  const removeItem = (menu) => {
    callbackRemoveItemQty(menu);
    dispatch({ type: "REMOVE_ITEM", decItem: menu.id });
  };

  const callbackRemoveItemQty = useCallback((menu) => {
    setTokoDuaQty((old) =>
      old.map((x) => (x.id === menu.id ? { ...x, qty: x.qty - 1 } : x))
    );
  }, []);
  return (
    <div>
      {tokoDuaQty.map((menu, index) => (
        <div key={index}>
          <h2>{menu.name}</h2>
          <button
            onClick={() =>
              menu.qty === 0
                ? dispatch({ type: "ADD_ITEM", addItem: menu })
                : addQty(menu)
            }
          >
            {menu.name}
          </button>
          <h3>{menu.qty}</h3>
          <button
            onClick={() => (menu.qty > 1 ? decQty(menu) : removeItem(menu))}
          >
            {menu.qty > 0 ? "dec qty" : "remove item"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TokoDua;
