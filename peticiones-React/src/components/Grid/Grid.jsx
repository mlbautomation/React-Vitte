/* Para utilizar Axios debemos ir a la terminal
y usar el comando: yarn add axios */

import { useEffect, useState } from "react";
import axios from "axios";
import Crypto from "../crypto/Crypto";
import "./Grid.css";

/* https://docs.coincap.io/ */

function Grid() {
  const API_URL = import.meta.env.VITE_API_URL;

  //El valor por defecto de useState en este caso es indefined o un objeto vacio "{}"
  const [cryptos, setCryptos] = useState();

  useEffect(() => {
    axios
      .get(`${API_URL}assets`)
      //ya realiza la conversión a json
      .then((data) => {
        //axios devuelve un objeto
        setCryptos(data.data.data);
      })
      .catch(() => {
        console.error("The request failed!");
      });
  }, []);

  if (!cryptos) return <span>Loading...</span>;

  return (
    <div className="app-container">
      <h1>Cryptocurrency List</h1>
      <div className="crypto-container">
        {cryptos.map(({ id, name, priceUsd, symbol, changePercent24Hr }) => (
          <Crypto
            key={id}
            name={name}
            priceUsd={priceUsd}
            symbol={symbol}
            changePercent24Hr={changePercent24Hr}
            id={id}
          />
        ))}
      </div>
    </div>
  );
}

export default Grid;
