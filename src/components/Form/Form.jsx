import React, { useCallback, useEffect, useState } from "react";
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

  useEffect(() => {
    tgbot.onEvent("mainButtonClicked", onSendData);
    return () => {
      tgbot.offEvent("mainButtonClicked", onSendData);
    };
  }, [onSendData]);

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
        placeholder={"Страна"}
        value={name}
        onChange={onChangeCountry}
      />
    </div>
  );
};

export default Form;
