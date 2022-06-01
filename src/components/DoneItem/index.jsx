import React from 'react';
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
			{item.title && (
				<p className={styles.cardTitle}>
					{item.title}
				</p>
			)}
			{item.description && (
				<p className={styles.particle}>
					{item.description}
				</p>
			)}
			{item.checklist && item.checklist.length > 0 && (
				<ul>
					{item.checklist.map(CLitem => (
						<li key={CLitem}>{CLitem}</li>
					))}
				</ul>
			)}
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
