export function loadCurrencyData(amountInPln) {
	return fetch(
		`https://currencies.com/?from=PLN&to=USD&amount=${amountInPln}`
	).then((response) => response.json());
}

export function getExchangeRate(currencyData) {
	return currencyData.then(
		({ exchangeRate }) => `Obecny kurs wymiany PLN na USD to: ${exchangeRate}`
	);
}
