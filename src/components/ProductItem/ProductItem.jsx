import React from "react";
import "./ProductItem.css";
// import { Modal } from "../Modal/Modal";

export const ProductItem = ({ numberLead, dateLead, nameLead, flats }) => {
  // const [openModal, setOpenModal] = useState(false);

  return (
    <div className="outlineLead">
      <p className="numberLead">
        {numberLead ? numberLead : "no number of lead"}
      </p>
      <p className="dateLead">
        {dateLead ? `Дата - ${dateLead}` : "- No date"}
      </p>
      <p className="nameLead">{nameLead ? `Имя - ${nameLead}` : "- No name"}</p>
      {/* <button className="btnLead" onClick={() => setOpenModal(true)}>
        Объекты {flats.length ? `(${flats.length})` : undefined}
      </button> */}

      {/* <Modal isOpen={openModal} onClose={setOpenModal} flats={flats} /> */}
    </div>
  );
};
