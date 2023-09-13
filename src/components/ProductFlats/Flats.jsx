import React from "react";

export const Flats = ({ items, onClose }) => {
  return (
    <div className="flats">
      <div className="LOT">LOT: {items.LOT}</div>
      <div className="Responsible">Responsible: {items.respnseble}</div>
      <div className="rooms">Rooms: {items.rooms}</div>
      <div className="buget">Buget: {items.buget}</div>
      <div className="hasRenovation">Renovation: {items.hasRenovation}</div>
      <div className="area">Area: {items.area}</div>
      <button onClick={() => onClose(false)}> close Modal</button>
    </div>
  );
};
