import React from "react";
import { Button } from "../Button/Button";
import { useTelegram } from "../hooks/useTelegram";

export const Header = () => {
  const { tgbot, onClose } = useTelegram();

  return (
    <div className="header">
      <span className="username">{tgbot.initDataUnsafe?.user?.username}</span>
      <Button text={"Закрыть"} onClick={onClose} />
    </div>
  );
};
