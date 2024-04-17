import { greetEveryone } from '../src/greet.js';

test('Properly greets people', () => {
	const people = [
		{ name: 'Jan', surname: 'Kowalski' },
		{ name: 'Anna', surname: 'Nowak' },
		{ name: 'Piotr', surname: 'Kowalczyk' },
	];

	const expectedResult = [
		'Cześć Jan Kowalski! Miło Cię widzieć ;)',
		'Cześć Anna Nowak! Miło Cię widzieć ;)',
		'Cześć Piotr Kowalczyk! Miło Cię widzieć ;)',
	];

	const actualResult = greetEveryone(people);

	expect(actualResult).toEqual(expectedResult);
});
