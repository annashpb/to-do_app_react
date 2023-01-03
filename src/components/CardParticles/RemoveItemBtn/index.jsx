import React from 'react';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import styles from './styles.module.scss';

const RemoveItemBtn = ({ id }) => {
	const { removeItemHandle } = useLocalStorage(id, null);

	return (
		<button
			type="button"
			title="Archive"
			onClick={removeItemHandle}
			className={styles.removeItemBtn}
		>
			&#10007;
		</button>
	);
};

export default RemoveItemBtn;