import React from "react";
import { ProductFlats } from "../ProductFlats/ProductFlats";
import "./Modal.css";

export const Modal = ({ isOpen, onClose, flats }) => {
  const onContentClick = (event) => {
    event.stopPropagation();
  };

  const onCloseModalHandler = () => {
    if (isOpen) {
      onClose();
    }
  };

  return (
    <div className={`Modal ${isOpen === true ? "isOpened" : ""}`}>
      <div className="overlay" onClick={onCloseModalHandler}>
        <div className="content" onClick={onContentClick}>
          <ProductFlats flats={flats} />
        </div>
      </div>
    </div>
  );
};
