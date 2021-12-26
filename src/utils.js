const stats = {
	aws: 'Awaiting start',
	inprog: 'In progress',
	done: 'Done',
};

const oneDay = 86400000;
const oneHour = 3600000;
const oneMin = 60000;

const dateToDisplay = date => {
	const dayArr = date.split('-');
	return `${dayArr[2]}.${dayArr[1]}.${dayArr[0]}`;
};

const countExpiryStatus = (dueDateObj, nrOfDays = 0, nrOfHrs = 0, nrOfMins = 0) => {
	const now = new Date();
	const endPoint = dueDateObj - (nrOfDays || 0)*oneDay - (nrOfHrs || 0)*oneHour - (nrOfMins || 0)*oneMin;
	const startPoint = endPoint - oneHour;
	const startNow = startPoint < now && endPoint > now;
	if (startNow) return 'start';
	const expired = startPoint < now && endPoint < now;
	if (expired) return 'expired';
};

export { stats, dateToDisplay, countExpiryStatus };
