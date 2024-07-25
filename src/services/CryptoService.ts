import axios from "axios";
import {
	CryptoCurrenciesResponseSchema,
	CyptoPriceSchema,
} from "../schema/crypto-schema";
import { Pair } from "../types";

export async function getCryptos() {
	const url =
		"https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD";
	const {
		data: { Data },
	} = await axios(url);
	const result = CryptoCurrenciesResponseSchema.safeParse(Data);
	if (result.success) {
		return result.data;
	}
}

export async function fetchCurrentCryptoPrice(pair: Pair) {
	const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`;
	const {
		data: { DISPLAY },
	} = await axios(url);

	const result = CyptoPriceSchema.safeParse(
		DISPLAY[pair.cryptocurrency][pair.currency]
	);

	if(result.success) {
		return result.data
	}
}
