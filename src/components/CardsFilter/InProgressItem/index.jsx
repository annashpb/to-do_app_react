import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { stats, countExpiryStatus } from '../../../utils';
import CardText from '../../CardParticles/CardText';
import EditItemModal from '../../EditItemModal';
import styles from './styles.module.scss';

const InProgressItem = ({ item }) => {
	const { id } = item;
	const { removeItemHandle, moveForwardHandle } = useLocalStorage(id, stats.done);

	const [expiryStatus, setExpiryStatus] = useState(null);
	const [modalOpened, setModalOpened] = useState(false);

	useEffect(() => {
		if (item['due-date']) {
			const dueDate = item['due-date'] + 'T' + (item['due-time'] || '00:00') + ':00';
			const dueDateObj = new Date(dueDate);

			const expStatusCheck = setInterval(() => {
				const expStat = countExpiryStatus(dueDateObj);
				setExpiryStatus(expStat);
				if (expStat === 'expired') clearInterval(expStatusCheck);
			}, 1000);
		}
	}, [item]);

	return (
		<>
			<div className={styles.container}>
				<CardText item={item} />
				{expiryStatus && expiryStatus === 'start' && (
					<p className={styles.warning}>Less than 1 hour left</p>
				)}
				{expiryStatus && expiryStatus === 'expired' && (
					<p className={styles.expired}>EXPIRED</p>
				)}
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
						<button
							type="button"
							title="Remove item"
							onClick={removeItemHandle}
							className={classnames(styles.itemBtn, styles.remove)}
						>
							&#10007;
						</button>
					</div>
					<button
						type="button"
						title="Move to done"
						onClick={moveForwardHandle}
						className={styles.moveToProgressBtn}
					>
						&#10095;
					</button>
				</div>
			</div>
			{modalOpened &&
				<EditItemModal item={item} close={() => setModalOpened(false)} />
			}
		</>
	);
};

export default InProgressItem;
