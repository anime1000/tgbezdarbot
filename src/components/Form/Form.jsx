import React, { useCallback, useEffect } from "react";
import { setName } from "../../store/slices/NameSlice";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";

const tgbot = window.Telegram.WebApp;

const Form = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name.name);
  const localsthName = localStorage.getItem("name");

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
    <div className="wrapper">
      <div className="form">
        <h3 className="title">Введите ваши данные: </h3>
        {!localsthName ? (
          <input
            className={"out"}
            type="text"
            placeholder={"Your name Google Sheets"}
            value={name}
            onChange={onChangeCountry}
          />
        ) : (
          <input
            className={"out"}
            type="text"
            placeholder={`Your name Google Sheets`}
            value={localsthName}
            onChange={onChangeCountry}
          />
        )}
      </div>
    </div>
  );
};

export default Form;
