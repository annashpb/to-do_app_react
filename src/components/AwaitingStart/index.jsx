import React from 'react';
import AwaitingStartItem from './AwaitingStartItem';

const AwaitingStart = () => {
	const toDoItems = Array.from(JSON.parse(localStorage.getItem('toDoItems')));

	return (
		toDoItems.map(item => (
			<AwaitingStartItem key={item.title} item={item} />
		))
	);
};

export default AwaitingStart;
