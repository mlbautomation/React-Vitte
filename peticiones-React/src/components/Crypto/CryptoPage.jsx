//See! useParams is from "react-router-dom", not from from "react-router"
import { useParams } from "react-router-dom";
import "./CryptoPage.css";
import usePetition from "../../hook/usePettion";
import CryptoInfo from "./info/CryptoInfo";
import CryptoHistory from "./info/CryptoHistory";

const CryptoPage = () => {
  const params = useParams();

  const [crypto, loadingCrypto] = usePetition(`assets/${params.id}`);
  const [history, loadingHistory] = usePetition(
    `assets/bitcoin/history?interval=d1`
  );

  if (loadingCrypto || loadingHistory) return <span>Loading...</span>;

  return (
    <div className="crypto-page-container">
      {crypto && <CryptoInfo crypto={crypto} />}
      {history && <CryptoHistory history={history} />}
    </div>
  );
};

export default CryptoPage;
