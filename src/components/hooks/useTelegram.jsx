import React from "react";

const tgbot = window.Telegram.WebApp;
export const useTelegram = () => {
  const onClose = () => {
    tgbot.close();
  };

  const onToggleButton = () => {
    if (tgbot.MainButton.isVisible) {
      tgbot.MainButton.hide();
    } else {
      tgbot.MainButton.show();
    }
  };

  return { onToggleButton, onClose, tgbot };
};
