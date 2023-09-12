import React from "react";
import "./ProductList.css";

import { ProductItem } from "../ProductItem/ProductItem";

const products = [
  {
    date: "01.08.2023",
    name_client: "",
    rooms: "1",
    buget: "52000",
    hasRenovation: "с ремонтом",
    area: "Батуми",
    respnseble: "Кирилл Пекуров",
    numberClient: "Лид4",
    flats: [
      {
        LOT: "1888КП",
        respnseble: "Кирилл Пекуров",
        rooms: "1",
        buget: "52000",
        hasRenovation: "с ремонтом",
        area: "Батуми",
      },
    ],
  },
  {
    date: "01.08.2023",
    name_client: "Татьяна",
    rooms: "1",
    buget: "7777",
    hasRenovation: "ч/б каркас",
    area: "Тбилиси",
    respnseble: "Кирилл Пекуров",
    numberClient: "Лид5",
    flats: [],
  },
];

export const ProductList = () => {
  return (
    <div className={"list"}>
      {products.map((item) =>
        item.flats.length ? (
          <ProductItem
            dateLead={item.date}
            numberLead={item.numberClient}
            key={item.numberClient}
            nameLead={item.name_client}
          />
        ) : undefined
      )}
    </div>
  );
};
