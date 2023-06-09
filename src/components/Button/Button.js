import React from "react";
import "./Button.css";

function Button(props) {
  const { variant = "primary", children, disabled, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
