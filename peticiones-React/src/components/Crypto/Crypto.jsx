import { Link } from "react-router-dom"
import "./Crypto.css"

const Crypto = ({ id, name, priceUsd, symbol, changePercent24Hr }) => {
    return (
        <div className="crypto">
            <h2>{name}</h2>
            <div className="info">
                <p><span className="label">Price: </span>{parseFloat(priceUsd).toFixed(4)}</p>
                <p><span className="label">Code: </span>{symbol}</p>
                <p>
                    <span className="label">Change: </span>
                    <span className={parseFloat(changePercent24Hr) > 0 ? "positive" : "negative"}>
                        {parseFloat(changePercent24Hr).toFixed(3)}%
                    </span>
                </p>
                <Link to={`/cryptocurrency/${id}`}>Ver detalles</Link>
            </div>
        </div>
    )
}

export default Crypto