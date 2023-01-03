import React, { useState, useEffect } from 'react';
import { countExpiryStatus } from '../../../utils';
import styles from './styles.module.scss';

const CardStatus = ({ item, isAwaiting = false }) => {
	const [expiryStatus, setExpiryStatus] = useState(null);

	useEffect(() => {
		if (item['due-date']) {
			const dueDate = item['due-date'] + 'T' + (item['due-time'] || '00:00') + ':00';
			const dueDateObj = new Date(dueDate);

			const expStatusCheck = setInterval(() => {
				const expStat = isAwaiting
				? countExpiryStatus(
					dueDateObj,
					item['nr-of-days'],
					item['nr-of-hours'],
					item['nr-of-mins']
				) : countExpiryStatus(dueDateObj);
				setExpiryStatus(expStat);
				if (expStat === 'expired') clearInterval(expStatusCheck);
			}, 1000);
		}
	}, [item, isAwaiting]);

	return (
		<>
			{expiryStatus && expiryStatus === 'start' && (
				<p className={styles.warning}>Less than 1 hour left</p>
			)}
			{expiryStatus && expiryStatus === 'expired' && (
				<p className={styles.expired}>EXPIRED</p>
			)}
		</>
	);
};

export default CardStatus;
