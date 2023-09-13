import React, { useCallback, useEffect } from "react";
import { setName } from "../../store/slices/NameSlice";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";

const tgbot = window.Telegram.WebApp;

const Form = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name.name);

  const onSendData = useCallback(() => {
    const data = {
      name,
    };
    dispatch(setName(data.name));

    tgbot.sendData(JSON.stringify(data));
  }, [name, dispatch]);

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
    dispatch(setName(e.target.value));
    localStorage.setItem("name", e.target.value);
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
