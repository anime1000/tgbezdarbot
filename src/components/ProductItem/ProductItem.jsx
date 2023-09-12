import React from "react";

export const ProductItem = ({ numberLead, dateLead, nameLead }) => {
  return (
    <div className="outlineLead">
      <p className="numberLead">{numberLead}</p>
      <p className="dateLead">{dateLead}</p>
      <p className="nameLead">{nameLead}</p>
      <button className="btnLead">Объекты</button>
    </div>
  );
};
