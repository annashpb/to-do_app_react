import React, { useState, useEffect } from 'react';
import { stats } from '../../utils';
import InProgressItem from './InProgressItem';

const InProgress = () => {;
	const lsItems = JSON.parse(localStorage.getItem('toDoItems')) || [];
	const [toDoItems, setToDoItems] = useState(Array.from(lsItems)
		.filter(item => item.status === stats.inprog));

	useEffect(() => {
		document.addEventListener('lsItemManipulation', () => {
			setToDoItems(Array.from(JSON.parse(localStorage.getItem('toDoItems')))
				.filter(item => item.status === stats.inprog));
		})
	}, []);

	return (
		toDoItems && toDoItems.length > 0 && toDoItems.map(item => (
			<InProgressItem key={item.id} item={item} />
		))
	);
};

export default InProgress;
