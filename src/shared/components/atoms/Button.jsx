import React from "react";
import { Link } from "react-router-dom";
import "./styles/Button.css";

const STYLES = ["btn--primary", "btn--outline", "btn--test"];
const SIZES = ["btn--medium", "btn--large"];

const Button = (props) => {
  let {
    children,
    condition,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    fontWeight,
    link
  } = props;
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return condition === "link" ? (
    <Link to={link} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        style={{ fontWeight: fontWeight }}
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      style={{ fontWeight: fontWeight }}
    >
      {children}
    </button>
  );
};

export default Button;
