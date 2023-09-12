import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "./Form.css";

const tgbot = window.Telegram.WebApp;

const Form = () => {
  const [name, setName] = useState("");

  const onSendData = useCallback(() => {
    const data = {
      name,
    };
    tgbot.sendData(JSON.stringify(data));
  }, [name]);

  const fetchName = useCallback(async () => {
    if (name) {
      await axios.get("http://localhost:4444/users", name);
    }
  }, [name]);

  useEffect(() => {
    tgbot.onEvent("mainButtonClicked", onSendData);
    fetchName();
    return () => {
      tgbot.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData, fetchName]);

  useEffect(() => {
    tgbot.MainButton.setParams({
      text: "Отправить данные",
    });
  }, []);

  useEffect(() => {
    if (!name) {
      tgbot.MainButton.hide();
    } else {
      tgbot.MainButton.show();
    }
  }, [name]);

  const onChangeCountry = (e) => {
    setName(e.target.value);
  };

  return (
    <div className={"form"}>
      <h3>Введите ваши данные</h3>
      <input
        className={"input"}
        type="text"
        placeholder={"Your name Google Sheets"}
        value={name}
        onChange={onChangeCountry}
      />
    </div>
  );
};

export default Form;
