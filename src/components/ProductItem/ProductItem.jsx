import React from "react";
import "./ProductItem.css";

export const ProductItem = ({ numberLead, dateLead, nameLead, flats }) => {
  return (
    <div className="outlineLead">
      <p className="numberLead">
        {numberLead ? numberLead : "no number of lead"}
      </p>
      <p className="dateLead">
        {dateLead ? `Дата - ${dateLead}` : "- No date"}
      </p>
      <p className="nameLead">{nameLead ? `Имя - ${nameLead}` : "- No name"}</p>
      <button className="btnLead">
        Объекты {flats.length ? flats.length : undefined}
      </button>
    </div>
  );
};
