export function greetEveryone(people) {
	return people.map(
		({ name, surname }) => `Cześć ${name} ${surname}! Miło Cię widzieć ;)`
	);
}
