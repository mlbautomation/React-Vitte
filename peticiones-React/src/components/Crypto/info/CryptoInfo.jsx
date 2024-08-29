import { parseFloatNumber } from "../../../helpers/numbers";

const CryptoInfo = ({ crypto }) => {
  return (
    <div className="info">
      <div className="main-info">
        <span>Ranking: {crypto.rank}</span>
        <h1>{crypto.name}</h1>
        <span className="symbol">{crypto.symbol}</span>
      </div>
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
            <span className="label">Variation (24 Hrs.): </span>
            <span>{parseFloatNumber(crypto.changePercent24Hr, 3)}</span>
          </li>
          <li className="detail">
            <span className="label">Vwap 24 Hrs.: </span>
            <span>{parseFloatNumber(crypto.vwap24Hr, 3)}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CryptoInfo;
