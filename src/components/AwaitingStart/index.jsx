import React, { useState, useEffect } from 'react';
import { stats } from '../../utils';
import AwaitingStartItem from './AwaitingStartItem';

const AwaitingStart = () => {
	const lsItems = JSON.parse(localStorage.getItem('toDoItems')) || [];
	const [toDoItems, setToDoItems] = useState(Array.from(lsItems)
		.filter(item => item.status === stats.aws));

	useEffect(() => {
		document.addEventListener('lsItemManipulation', () => {
			setToDoItems(Array.from(JSON.parse(localStorage.getItem('toDoItems')))
				.filter(item => item.status === stats.aws));
		})
	}, []);

	return (
		toDoItems && toDoItems.length > 0 && toDoItems.map(item => (
			<AwaitingStartItem key={item.id} item={item} />
		))
	);
};

export default AwaitingStart;
