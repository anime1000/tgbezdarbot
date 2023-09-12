import React from "react";
import "./Button.css";

export const Button = ({ className, ...otherProps }) => {
  return <button className={"button" + className} {...otherProps} />;
};
