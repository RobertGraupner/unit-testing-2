import { cancellableDelay } from '../src/timer.js';
import { jest } from '@jest/globals';
// useFakeTimers to funkcja z biblioteki jest, która pozwala na kontrolowanie czasu w testach
jest.useFakeTimers();
// spyOn to funkcja z biblioteki jest, która pozwala na monitorowanie wywołań funkcji
jest.spyOn(global, 'setTimeout');

test('Callback is call after a given amount of seconds passed', () => {
	const timeInSeconds = 2;
	// jest.fn() to funkcja z biblioteki jest, która tworzy mocka funkcji.
	// Dzięki temu możemy sprawdzić, czy funkcja została wywołana
	const callback = jest.fn(() => {
		console.log(`Ta funkcja powinna się wykonać po ${timeInSeconds} sekundach`);
	});

	cancellableDelay(2, callback);
	// runAllTimers to funkcja z biblioteki jest, która pozwala na przyspieszenie czasu w testach.
	// Dzięki temu testy, które korzystają z setTimeout, nie muszą czekać na upływ czasu
	jest.runAllTimers();

	expect(callback).toHaveBeenCalled();
	expect(setTimeout).toHaveBeenCalledWith(
		expect.any(Function),
		timeInSeconds * 1000
	);
});

test('Callback is aborted', () => {
	const timeInSeconds = 2;
	const callback = jest.fn(() => {
		console.log(`Ta funkcja powinna się wykonać po ${timeInSeconds} sekundach`);
	});

	const abort = cancellableDelay(timeInSeconds, callback);
	abort();

	jest.runAllTimers();

	expect(callback).not.toHaveBeenCalled();
});
