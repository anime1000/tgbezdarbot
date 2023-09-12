import React from "react";

export const ProductItem = ({ numberLead, dateLead, nameLead }) => {
  return (
    <div className="outlineLead">
      <p className="numberLead">
        {numberLead ? nameLead : "no number of lead"}
      </p>
      <p className="dateLead">{dateLead ? dateLead : "No date"}</p>
      <p className="nameLead">{nameLead ? nameLead : "No name"}</p>
      <button className="btnLead">Объекты</button>
    </div>
  );
};
