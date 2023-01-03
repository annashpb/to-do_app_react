import React from 'react';
import classnames from 'classnames';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import RemoveItemBtn from '../RemoveItemBtn';
import styles from './styles.module.scss';

const CardControls = ({ id, forwardStat, setModalOpened }) => {
	const { moveForwardHandle } = useLocalStorage(id, forwardStat);

	return (
		<div className={styles.btnsWrapper}>
			<div>
				<button
					type="button"
					title="Edit"
					onClick={() => setModalOpened(true)}
					className={classnames(styles.itemBtn, styles.edit)}
				>
					&#9998;
				</button>
				<RemoveItemBtn id={id} />
			</div>
			<button
				type="button"
				title="Move to done"
				onClick={moveForwardHandle}
				className={styles.moveForwardBtn}
			>
				&#10095;
			</button>
		</div>
	);
};

export default CardControls;
