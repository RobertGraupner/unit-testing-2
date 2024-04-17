export function getNewShoppingList() {
	return [];
}

export function addToShoppingList(shoppingList, newItem) {
	if (!shoppingList.find((element) => element === newItem)) {
		shoppingList.push(newItem);
	}
}
