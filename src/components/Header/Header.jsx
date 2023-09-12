import React from "react";
import { Button } from "../Button/Button";

const tgbot = window.Telegram.WebApp;

export const Header = () => {
  const onClose = () => {
    tgbot.close();
  };

  return (
    <div>
      <Button text={"Закрыть"} onClick={onClose} />
      <span>{tgbot.initDataUnsafe?.user?.username}</span>
    </div>
  );
};
