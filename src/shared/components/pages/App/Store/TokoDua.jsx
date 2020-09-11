import React, { useContext, useState, useEffect } from "react";
import { TestContext } from "../../../../../contexts";

const TokoDua = () => {
  const { dispatch } = useContext(TestContext);
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
      setTokoDuaQty(tokoDua);
    }
  }, [tokoDua, tokoDuaQty]);
  
  return (
    <div>
      {tokoDuaQty.map((menu, index) => (
        <div key={index}>
          <h2>{menu.name}</h2>
          <button onClick={() => dispatch({ type: "ADD_ITEM", addItem: menu })}>
            {menu.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default TokoDua;
