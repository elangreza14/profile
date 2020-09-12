import React from "react";
import HomepageSolar from "../../../assets/images/HomepageSolar.jpg";
import { Button } from "../atoms";
import "../../../App/App.css";
import "./styles/HeroSection.css";

const HeroSection = (props) => {
  const { height } = props;
  return (
    <div style={{ maxHeight: height - 230 }} className="hero-container">
      <img
        src={HomepageSolar}
        alt="homepage"
        style={{ maxHeight: height - 230 }}
        className="bigimage"
      />
      <h1>Sell and Buy Energy Right Now!</h1>
      <p>What Are You Waiting For?</p>
      <div className="hero-btns">
        <Button
          condition="link"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          condition="link"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          GET TO KNOW US
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
