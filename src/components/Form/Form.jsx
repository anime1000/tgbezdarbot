import React, { useState } from "react";
import "./Form.css";

const tgbot = window.Telegram.WebApp;

export const Form = () => {
  const [name, setName] = useState("");

  if (name) {
    tgbot.MainButton.show();
  } else {
    tgbot.MainButton.hide();
  }

  return (
    <input
      className="out"
      onChange={(e) => setName(e.target.value)}
      value={name}
      placeholder="your name in Google Sheets"
    />
  );
};
