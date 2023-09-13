import React, { useEffect } from "react";
import "./ProductList.css";

import { ProductItem } from "../ProductItem/ProductItem";
import { NameTHUNK } from "../../store/slices/NameTHUNK";
import { useDispatch, useSelector } from "react-redux";
const tgbot = window.Telegram.WebApp;

export const ProductList = () => {
  const loading = useSelector((state) => state.name.isLoading);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.name.users);
  const localStgName = localStorage.getItem("name");

  useEffect(() => {
    if (localStgName) {
      dispatch(NameTHUNK(localStgName));
    }
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

  if (!localStgName) {
    return "НЕТУ ИМЕНИ";
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
        : "НИЧЕГО НЕ НАЙДЕНО"}
    </div>
  );
};
