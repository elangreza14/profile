import React from "react";
import { Button } from "../../atoms";

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404 - Not Found!</h1>
      <p>Sorry We Can't Find Page Your Looking For</p>
      {/* <div className="hero-btns"> */}
      <Button
        condition="link"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
        link="/"
      >
        Back To Home
      </Button>
      {/* </div> */}
    </div>
  );
};

export default NotFound;
