import React, { useState } from "react";
import "./Form.css";

export const Form = () => {
  const [name, setName] = useState("");
  return (
    <input
      className="out"
      onChange={(e) => setName(e.target.value)}
      value={name}
      placeholder="your name in Google Sheets"
    />
  );
};
