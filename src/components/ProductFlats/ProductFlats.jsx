import React from "react";
import { Flats } from "./Flats";

export const ProductFlats = ({ flats, isOpen, onClose }) => {
  return (
    <div>
      {flats.map((item) => {
        return <Flats items={item} key={item.LOT} onClose={onClose} />;
      })}
    </div>
  );
};
