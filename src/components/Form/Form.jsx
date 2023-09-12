import React, { useCallback, useEffect, useState } from "react";
import "./Form.css";

const tgbot = window.Telegram.WebApp;

export const Form = () => {
  const [name, setName] = useState("");

  const onSendData = useCallback(() => {
    const data = {
      name,
    };

    console.log(data);
    tgbot.sendData(JSON.stringify(data));
  }, [name]);

  useEffect(() => {
    tgbot.onEvent("mainButtonClicked", onSendData);

    return () => {
      tgbot.offEvent("mainButtonClicked", onSendData);
    };
  }, []);

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
