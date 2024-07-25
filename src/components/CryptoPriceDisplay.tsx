import { useMemo } from "react";
import { useCryptoStore } from "../store";
import Spinner from "./Spinner";

export default function CryptoPriceDisplay() {
	const result = useCryptoStore((state) => state.result);
	const loading = useCryptoStore((state) => state.loading);
	const hasResult = useMemo(
		() => !Object.values(result).includes(""),
		[result]
	);

	return (
		<div className="result-wrapper">
			{loading ? <Spinner /> : hasResult && (
					<>
						<h2 className="result-title">Cotización</h2>
						<div className="result">
							<img
								src={`https://cryptocompare.com/${result.IMAGEURL}`}
								alt="Imagen de criptomoneda"
								className="result-img"
							/>

							<div>
								<p className="result-p">
									El precio es de:{" "}
									<span className="result-span">
										{result.PRICE}
									</span>
								</p>
								<p className="result-p">
									Precio más alto del día:{" "}
									<span className="result-span">
										{result.HIGHDAY}
									</span>
								</p>
								<p className="result-p">
									Precio más bajo del día:{" "}
									<span className="result-span">
										{result.LOWDAY}
									</span>
								</p>
								<p className="result-p">
									Variaciones últimas 24 horas:{" "}
									<span className="result-span">
										{result.CHANGEPCT24HOUR}
									</span>
								</p>
								<p className="result-p">
									Última actalización:{" "}
									<span className="result-span">
										{result.LASTUPDATE}
									</span>
								</p>
							</div>
						</div>
					</>
				)
			}
		</div>
	);
}
