import React, { useState, useEffect } from 'react';
import AwaitingStartItem from './AwaitingStartItem';

const AwaitingStart = () => {;
	const [toDoItems, setToDoItems] = useState(Array.from(JSON.parse(localStorage.getItem('toDoItems'))));

	useEffect(() => {
		document.addEventListener('itemInserted', () => {
			setToDoItems(Array.from(JSON.parse(localStorage.getItem('toDoItems'))));
		})
	}, []);

	return (
		toDoItems.map(item => (
			<AwaitingStartItem key={item.title} item={item} />
		))
	);
};

export default AwaitingStart;
