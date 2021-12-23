const stats = {
	aws: 'Awaiting start',
	inprog: 'In progress',
	done: 'Done',
};

const dateToDisplay = date => {
	const dayArr = date.split('-');
	return `${dayArr[2]}.${dayArr[1]}.${dayArr[0]}`;
}

export { stats, dateToDisplay };
