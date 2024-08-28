//See! useParams is from "react-router-dom", not from from "react-router"
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { parseFloatNumber } from "../helpers/numbers";
import "./CryptoPage.css";

const CryptoPage = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const params = useParams();

  const [crypto, setCrypto] = useState({});
  useEffect(() => {
    axios
      .get(`${API_URL}assets/${params.id}`)
      .then((data) => {
        setCrypto(data.data.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const [history, setHistory] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}assets/${params.id}/history?interval=d1`)
      .then((data) => {
        setHistory(data.data.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <div className="crypto-page-container">
      {/* Fundamental details of the Cryptocurrency */}
      <div className="info">
        <span>Ranking: {crypto.rank}</span>
        <h1>{crypto.name}</h1>
        <span className="symbol">{crypto.symbol}</span>
      </div>
      {/* Basic details of the Cryptocurrency */}
      <div className="details">
        <ul>
          <li className="detail">
            <span className="label">Price: </span>
            <span>{parseFloatNumber(crypto.priceUsd, 3)}</span>
          </li>
          <li className="detail">
            <span className="label">MaxSupply: </span>
            <span>{parseFloatNumber(crypto.maxSupply, 3)}</span>
          </li>
          <li className="detail">
            <span className="label">Market Cap (USD): </span>
            <span>{parseFloatNumber(crypto.marketCapUsd, 3)}</span>
          </li>
          <li className="detail">
            <span className="label">Volume (USD - 24 Hrs.): </span>
            <span>{parseFloatNumber(crypto.volumeUsd24Hr, 3)}</span>
          </li>
          <li className="detail">
            <span className="label">Variety (24 Hrs.): </span>
            <span>{parseFloatNumber(crypto.changePercent24Hr, 3)}</span>
          </li>
          <li className="detail">
            <span className="label">Vwap 24 Hrs.: </span>
            <span>{parseFloatNumber(crypto.vwarp24Hr, 3)}</span>
          </li>
        </ul>
      </div>
      {/* History informormation table */}
      <div className="history">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {history.reverse().map(({ date, priceUsd, time }) => (
              <tr key={time}>
                <td className="label">{new Date(date).toDateString()}</td>
                <td className="price">{parseFloatNumber(priceUsd, 3)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoPage;
