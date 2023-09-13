import React, { useEffect } from "react";
import "./ProductList.css";

import { ProductItem } from "../ProductItem/ProductItem";
import { NameTHUNK } from "../../store/slices/NameTHUNK";
import { useDispatch, useSelector } from "react-redux";
const tgbot = window.Telegram.WebApp;

export const ProductList = () => {
  const name = useSelector((state) => state.name.name);
  const loading = useSelector((state) => state.name.isLoading);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.name.users);

  useEffect(() => {
    dispatch(NameTHUNK(name));
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

  if (loading) {
    return "ЗАГРУЗКА";
  }

  return (
    <div className={"list"}>
      {users.length
        ? users.map((item, i) =>
            item.flats.length ? (
              <ProductItem
                dateLead={item.date}
                numberLead={item.numberClient}
                key={i}
                nameLead={item.name_client}
                flats={item.flats}
              />
            ) : undefined
          )
        : "НЕТУ ИМЕНИ"}
    </div>
  );
};
