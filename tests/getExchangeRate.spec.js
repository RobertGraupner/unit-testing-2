import { getExchangeRate, loadCurrencyData } from '../src/getExchangeRate.js';

// zmieniliśmy getExchangeRate, wyciągając z niego fetch, który jest używany w loadCurrencyData
// dzięki temu testujemy tylko funkcję getExchangeRate

// import { jest } from '@jest/globals';

// nadpisujemy funkcję fetch, przy pomocy której pobieramy kurs wymiany walut

// const spy = jest.spyOn(global, 'fetch');

// tworzymy mocka funkcji fetch, która zwraca obiekt z metodą then
// Nie wykonujemy rzeczywistego zapytania do serwera, tylko zwracamy obiekt z odpowiedzią
// spy.mockImplementation(() => {
// 	console.log('fetch called');
// 	return {
// 		then: () => {
// 			return {
// 				then: (callback) => {
// 					return callback({ exchangeRate: 0.25 });
// 				},
// 			};
// 		},
// 	};
// });

test('Display proper PLN to USD conversion rate', async () => {
	const currencyData = {
		then: (callback) => {
			return callback({ exchangeRate: 0.25 });
		},
	};
	const result = await getExchangeRate(currencyData);
	const expectedReult = 'Obecny kurs wymiany PLN na USD to: 0.25';

	expect(result).toEqual(expectedReult);
});
