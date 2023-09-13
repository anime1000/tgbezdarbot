import React from "react";
import { ProductFlats } from "../ProductFlats/ProductFlats";
import "./Modal.css";

export const Modal = ({ children, isOpen, onClose, flats }) => {
  const onContentClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={`Modal ${isOpen === true ? "isOpened" : ""}`}>
      <div className="overlay">
        <div className="content" onClick={onContentClick}>
          <ProductFlats flats={flats} onClose={onClose} isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
};
