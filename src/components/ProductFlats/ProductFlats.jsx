import React from "react";
import { Flats } from "./Flats";
import "./ProductFlats.css";

export const ProductFlats = ({ flats, onClose, isOpen }) => {
  const onCloseHandlerPopup = () => {
    if (isOpen) {
      onClose();
    }
  };

  return (
    <div className="productflats">
      {flats.map((item) => {
        return <Flats items={item} key={item.LOT} />;
      })}
      <button onClick={onCloseHandlerPopup} className="btnclosepopup">
        Закрыть модальное окно
      </button>
    </div>
  );
};
