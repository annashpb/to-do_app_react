import React from 'react';
import styles from './styles.module.scss';

const DoneItem = ({ item }) => {
	const { id, title, description, checklist } = item;
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
			{title && (
				<p className={styles.cardTitle}>
					{title}
				</p>
			)}
			{description && (
				<p className={styles.particle}>
					{description}
				</p>
			)}
			{checklist && checklist.length > 0 && (
				<ul>
					{checklist.map(CLitem => (
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
