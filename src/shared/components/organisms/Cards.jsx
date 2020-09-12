import React, { Suspense } from "react";
import { CardItem } from ".";
import "./styles/Cards.css";
import Satu from "../../../assets/images/Satu.jpg";
import Dua from "../../../assets/images/Dua.jpg";

const Cards = () => {
  return (
    <div className="cards">
      <h1>Check out these epic Offers</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Suspense fallback={<div>Loading...</div>}>
              <CardItem
                src={Satu}
                text="Explore New Investment in Energy"
                label="News"
                path="/"
              />
              <CardItem
                src={Dua}
                text="New 500KW Power you can Buy in Jawa"
                label="Sell"
                path="/"
              />
            </Suspense>
          </ul>
          <ul className="cards__items">
            <Suspense fallback={<div>Loading...</div>}>
              <CardItem
                src={Satu}
                text="Explore New Investment in Energy"
                label="News"
                path="/"
              />
              <CardItem
                src={Dua}
                text="New 500KW Power you can Buy in Jawa"
                label="Sell"
                path="/tokosatu"
              />
              <CardItem
                src={Dua}
                text="New 500KW Power you can Buy in Jawa"
                label="Sell"
                path="/"
              />
            </Suspense>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;
