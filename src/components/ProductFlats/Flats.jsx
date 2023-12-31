import React from "react";
import "./Flats.css";

export const Flats = ({ items }) => {
  return (
    <div className="flats">
      <div className="LOT">LOT: {items.LOT}</div>
      <div className="Responsible">Responsible: {items.respnseble}</div>
      <div className="rooms">Rooms: {items.rooms}</div>
      <div className="buget">Buget: {items.buget}</div>
      <div className="hasRenovation">Renovation: {items.hasRenovation}</div>
      <div className="area">Area: {items.area}</div>
    </div>
  );
};
