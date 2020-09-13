import React, { useContext, useState, useEffect, useCallback } from "react";
import { StoreContext } from "../../../../../contexts";

const TokoSatu = () => {
  const { cart, dispatch } = useContext(StoreContext);
  const [tokoSatuQty, setTokoSatuQty] = useState([]);
  const tokoSatu = [
    { id: 4, name: "soju", price: 500 },
    { id: 5, name: "kimbab", price: 250 },
    { id: 6, name: "ramyoen", price: 150 },
  ];

  useEffect(() => {
    if (tokoSatuQty.length < 1) {
      tokoSatu.forEach((y) => {
        y.qty = 0;
      });
      cart.forEach((x) => {
        tokoSatu.forEach((y) => {
          if (y.id === x.id) {
            y.qty = x.qty + y.qty;
          }
        });
      });
      setTokoSatuQty(tokoSatu);
    }
  }, [tokoSatu, tokoSatuQty, cart]);

  const addQty = (menu) => {
    callbackAddQty(menu);
    dispatch({ type: "ADD_QTY", addstuff: menu.id });
  };

  const callbackAddQty = useCallback((menu) => {
    setTokoSatuQty((old) =>
      old.map((x) => (x.id === menu.id ? { ...x, qty: x.qty + 1 } : x))
    );
  }, []);

  const decQty = (menu) => {
    callbackDecQty(menu);
    dispatch({ type: "REMOVE_QTY", decstuff: menu.id });
  };

  const callbackDecQty = useCallback((menu) => {
    setTokoSatuQty((old) =>
      old.map((x) => (x.id === menu.id ? { ...x, qty: x.qty - 1 } : x))
    );
  }, []);

  const removeItem = (menu) => {
    callbackRemoveItemQty(menu);
    dispatch({ type: "REMOVE_ITEM", decItem: menu.id });
  };

  const callbackRemoveItemQty = useCallback((menu) => {
    setTokoSatuQty((old) =>
      old.map((x) => (x.id === menu.id ? { ...x, qty: x.qty - 1 } : x))
    );
  }, []);

  return (
    <div>
      {tokoSatuQty.map((menu, index) => (
        <div key={index}>
          <h2>{menu.name}</h2>
          <button
            onClick={() =>
              menu.qty === 0
                ? dispatch({ type: "ADD_ITEM", addItem: menu })
                : addQty(menu)
            }
          >
            {menu.qty < 1 ? "add item" : "add qty"}
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

export default TokoSatu;
