import React from 'react';
import CardText from '../../CardParticles/CardText';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import styles from './styles.module.scss';

const DoneItem = ({ item }) => {
	const { id } = item;
	const { removeItemHandle } = useLocalStorage(id, null);

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
