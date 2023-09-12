import React from "react";
import { Button } from "../Button/Button";

const tgbot = window.Telegram.WebApp;

export const Header = () => {
  const onClose = () => {
    tgbot.close();
  };

  const onSend = () => {
    tgbot.onEvent("mainButtonClicked", () => {
      tgbot.sendData("send data");
    });
  };

  return (
    <div>
      <span>{tgbot.initDataUnsafe?.user?.username}</span>
      <Button text={"Закрыть"} onClick={onClose} />
      <Button text={"Send"} onClick={onSend} />
    </div>
  );
};
