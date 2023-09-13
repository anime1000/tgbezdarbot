import React from "react";
import { Flats } from "./Flats";

export const ProductFlats = ({ flats }) => {
  return (
    <div>
      {flats.map((item) => {
        return <Flats items={item} key={item.LOT} />;
      })}
    </div>
  );
};
