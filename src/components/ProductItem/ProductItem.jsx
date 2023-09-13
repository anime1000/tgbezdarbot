import React from "react";
import "./ProductItem.css";

export const ProductItem = ({ numberLead, dateLead, nameLead, flats }) => {
  return (
    <div className="outlineLead">
      <p className="numberLead">
        {numberLead ? numberLead : "no number of lead"}
      </p>
      <p className="dateLead">{dateLead ? dateLead : "No date"}</p>
      <p className="nameLead">{nameLead ? nameLead : "No name"}</p>
      <button className="btnLead">
        Объекты {flats.length ? flats.length : undefined}
      </button>
    </div>
  );
};
