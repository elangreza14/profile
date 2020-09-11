import React, { useContext, useState, useEffect } from "react";
import { TestContext } from "../../../../../contexts";

const TokoSatu = () => {
  const { dispatch } = useContext(TestContext);
  const [tokoSatuQty, setTokoSatuQty] = useState([]);
  const tokoSatu = [
    { id: 4, name: "soju", price: 500 },
    { id: 5, name: "kimbab", price: 250 },
    { id: 6, name: "ramyoen", price: 150 },
  ];

  useEffect(() => {
    if (tokoSatuQty.length < 1) {
      // SyncManager.forEach(()=>{

      // })
      tokoSatu.forEach((x) => {
        x.qty = 0;
      });
      setTokoSatuQty(tokoSatu);
    }
  }, [tokoSatu, tokoSatuQty]);

  return (
    <div>
      {tokoSatuQty.map((menu, index) => (
        <div key={index}>
          <h2>{menu.name}</h2>
          <button
            onClick={() =>
              menu.qty === 0
                ? dispatch({ type: "ADD_ITEM", addItem: menu })
                : dispatch({ type: "ADD_QTY", addstuff: menu })
            }
          >
            {menu.qty < 1 ? "add item" : "add qty"}
            {/* {menu.name} */}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TokoSatu;
