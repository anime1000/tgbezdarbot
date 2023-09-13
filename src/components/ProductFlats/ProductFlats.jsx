import React from "react";
import { Flats } from "./Flats";
import "./ProductFlats.css";

export const ProductFlats = ({ flats }) => {
  return (
    <div className="productflats">
      {flats.map((item) => {
        return <Flats items={item} key={item.LOT} />;
      })}
    </div>
  );
};
