import React from "react";

export const useTelegram = () => {
  const tgbot = window.Telegram.WebApp;

  const onClose = () => {
    tgbot.close();
  };

  return { onClose, tgbot };
};
