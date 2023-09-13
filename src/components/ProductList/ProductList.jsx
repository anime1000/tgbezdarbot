import React, { useCallback, useEffect, useState } from "react";
import "./ProductList.css";

import { ProductItem } from "../ProductItem/ProductItem";
import axios from "axios";
const tgbot = window.Telegram.WebApp;

export const ProductList = () => {
  const [users, setUsers] = useState([]);

  const fetchName = useCallback(async () => {
    const response = await axios.post("http://localhost:4444/users", {
      name: "Вадим Семенов",
    });

    return setUsers(response.data);
  }, []);

  useEffect(() => {
    fetchName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    tgbot.MainButton.show();
    tgbot.MainButton.setParams({
      text: "Закрыть окно",
    });
  }, []);

  useEffect(() => {
    tgbot.onEvent("mainButtonClicked", tgbot.close);
    return () => {
      tgbot.offEvent("mainButtonClicked", tgbot.close);
    };
  }, []);

  return (
    <div className={"list"}>
      {users.map((item, i) =>
        item.flats.length ? (
          <ProductItem
            dateLead={item.date}
            numberLead={item.numberClient}
            key={i}
            nameLead={item.name_client}
            flats={item.flats}
          />
        ) : undefined
      )}
    </div>
  );
};
