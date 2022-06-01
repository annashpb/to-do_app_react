import React from 'react';
import CardText from '../CardText';
import styles from './styles.module.scss';

const DoneItem = ({ item }) => {
	const { id } = item;
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

	return (
		<div className={styles.container}>
			<CardText item={item} />
			<button
				type="button"
				title="Archive"
				onClick={removeItemHandle}
				className={styles.removeItemBtn}
			>
				&#10007;
			</button>
		</div>
	);
};

export default DoneItem;
