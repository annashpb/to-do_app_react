const useLocalStorage = (id, forwardStat) => {
	const ls = Array.from(JSON.parse(localStorage.getItem('toDoItems')));
	const index = ls.findIndex(object => {
		return object.id === id;
	});

	const updateLS = () => {
		localStorage.setItem('toDoItems', JSON.stringify(ls));
		document.dispatchEvent(new Event('lsItemManipulation'));
	}

	const removeItemHandle = () => {
		ls.splice(index, 1);
		updateLS();
	}

	const moveForwardHandle = () => {
		ls[index].status = forwardStat;
		updateLS();
	}

	return { removeItemHandle, moveForwardHandle };
};

export { useLocalStorage };
