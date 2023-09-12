import React from "react";
import "./Button.css";

export const Button = ({ text, className, ...otherProps }) => {
  return (
    <button className={"button" + className} {...otherProps}>
      {text}
    </button>
  );
};
