import React, { useCallback, useEffect, useState } from "react";
import "./ProductList.css";

import { ProductItem } from "../ProductItem/ProductItem";
import axios from "axios";
const tgbot = window.Telegram.WebApp;

const users1 = [
  {
    date: "01.08.2023",
    name_client: "илья",
    rooms: "1",
    buget: "42000",
    hasRenovation: "с ремонтом",
    area: "Гонио",
    respnseble: "Вадим Семенов",
    numberClient: "Лид6",
    flats: [],
  },
  {
    date: "01.08.2023",
    name_client: "вадим",
    rooms: "1+1",
    buget: "177000",
    hasRenovation: "с ремонтом",
    area: "Гонио",
    respnseble: "Вадим Семенов",
    numberClient: "Лид6",
    flats: [
      {
        LOT: "1882ВС",
        respnseble: "Вадим Семенов",
        rooms: "1+1",
        buget: "177000",
        hasRenovation: "с ремонтом",
        area: "Гонио",
      },
      {
        LOT: "1882ВС",
        respnseble: "Вадим Семенов",
        rooms: "1+1",
        buget: "177000",
        hasRenovation: "с ремонтом",
        area: "Гонио",
      },
      {
        LOT: "1882ВС",
        respnseble: "Вадим Семенов",
        rooms: "1+1",
        buget: "177000",
        hasRenovation: "с ремонтом",
        area: "Гонио",
      },
      {
        LOT: "1882ВС",
        respnseble: "Вадим Семенов",
        rooms: "1+1",
        buget: "177000",
        hasRenovation: "с ремонтом",
        area: "Гонио",
      },
      {
        LOT: "1882ВС",
        respnseble: "Вадим Семенов",
        rooms: "1+1",
        buget: "177000",
        hasRenovation: "с ремонтом",
        area: "Гонио",
      },
      {
        LOT: "1882ВС",
        respnseble: "Вадим Семенов",
        rooms: "1+1",
        buget: "177000",
        hasRenovation: "с ремонтом",
        area: "Гонио",
      },
      {
        LOT: "1882ВС",
        respnseble: "Вадим Семенов",
        rooms: "1+1",
        buget: "177000",
        hasRenovation: "с ремонтом",
        area: "Гонио",
      },
    ],
  },
  {
    date: "01.08.2023",
    name_client: "Герман",
    rooms: "1+1",
    buget: "83000",
    hasRenovation: "с ремонтом",
    area: "Батуми",
    respnseble: "Вадим Семенов",
    numberClient: "Лид6",
    flats: [
      {
        LOT: "1884ВС",
        respnseble: "Вадим Семенов",
        rooms: "1+1",
        buget: "83000",
        hasRenovation: "с ремонтом",
        area: "Батуми",
      },
    ],
  },
];

export const ProductList = () => {
  const [users, setUsers] = useState([]);

  const fetchName = useCallback(async () => {
    const response = await axios.post("http://localhost:4444/users", {
      name: "Вадим Семенов",
    });
    return setUsers(response.data);
  }, []);

  if (users.length) {
    console.log("s");
  }

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
      {users1.map((item, i) =>
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
