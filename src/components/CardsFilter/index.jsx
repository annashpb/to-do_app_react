import React, { useState, useEffect } from 'react';
import { stats } from '../../utils';
import AwaitingStartItem from '../AwaitingStartItem';
import InProgressItem from '../InProgressItem';
import DoneItem from '../DoneItem';

const CardsFilter = ({ column }) => {
	const lsItems = JSON.parse(localStorage.getItem('toDoItems')) || [];
	const [toDoItems, setToDoItems] = useState(Array.from(lsItems)
		.filter(item => item.status === column));

	useEffect(() => {
		document.addEventListener('lsItemManipulation', () => {
			setToDoItems(Array.from(JSON.parse(localStorage.getItem('toDoItems')))
				.filter(item => item.status === column));
		})
	}, [column]);

	switch (column) {
		case stats.aws:
			return (
				toDoItems && toDoItems.length > 0 && toDoItems.map(item => (
					<AwaitingStartItem key={item.id} item={item} />
				))
			);
		case stats.inprog:
			return (
				toDoItems && toDoItems.length > 0 && toDoItems.map(item => (
					<InProgressItem key={item.id} item={item} />
				))
			);
		case stats.done:
			return (
				toDoItems && toDoItems.length > 0 && toDoItems.map(item => (
					<DoneItem key={item.id} item={item} />
				))
			);
		default:
			return null;
	}
};

export default CardsFilter;
