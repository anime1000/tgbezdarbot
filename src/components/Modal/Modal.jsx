import React from "react";
import { ProductFlats } from "../ProductFlats/ProductFlats";
import "./Modal.css";

export const Modal = ({ children, isOpen, onClose, flats }) => {
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
      <div className="overlay">
        <div className="content" onClick={onContentClick}>
          <ProductFlats flats={flats} />
          <button className="btnClose" onClick={onCloseModalHandler}>
            close modal
          </button>
        </div>
      </div>
    </div>
  );
};
