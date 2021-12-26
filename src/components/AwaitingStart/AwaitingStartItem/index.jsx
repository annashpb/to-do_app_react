import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { dateToDisplay } from '../../../utils';
import styles from './styles.module.scss';

const AwaitingStartItem = ({ item }) => {
	const [status, setStatus] = useState(null);

	useEffect(() => {
		if (item['due-date']) {
			const dueDate = item['due-date'] + 'T' + (item['due-time'] || '00:00') + ':00';
			const dueDateObj = new Date(dueDate);
			const oneDay = 86400000;
			const oneHour = 3600000;
			const oneMin = 60000;

			setInterval(() => {
				const now = new Date();
				const endPoint = dueDateObj - item['nr-of-days']*oneDay - item['nr-of-hours']*oneHour - item['nr-of-mins']*oneMin;
				const startPoint = endPoint - oneHour;
				const startNow = startPoint < now && endPoint > now;
				startNow && setStatus('start');
				const expired = startPoint < now && endPoint < now;
				expired && setStatus('expired');
			}, 1000);
		}
	}, []);

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
			{item['due-date'] && (
				<p className={styles.particle}>
					<strong>Due date:&nbsp;</strong>
					<span>
						{dateToDisplay(item['due-date'])}
						{item['due-time'] && ` ${item['due-time']}`}
					</span>
				</p>
			)}
			{(item['nr-of-days'] || item['nr-of-hours'] || item['nr-of-mins']) && (
				<p className={styles.particle}>
					<strong>Time required:</strong>
					<span>
						{item['nr-of-days'] && ` ${item['nr-of-days']}d`}
						{item['nr-of-hours'] && ` ${item['nr-of-hours']}h`}
						{item['nr-of-mins'] && ` ${item['nr-of-mins']}m`}
					</span>
				</p>
			)}
			{status && status === 'start' && (
				<p className={styles.warning}>Less than 1 hour left</p>
			)}
			{status && status === 'expired' && (
				<p className={styles.expired}>EXPIRED</p>
			)}
			<div className={styles.btnsWrapper}>
				<div>
					<button
						type="button"
						title="Edit"
						className={classnames(styles.itemBtn, styles.edit)}
					>
						&#9998;
					</button>
					<button
						type="button"
						title="Remove item"
						className={classnames(styles.itemBtn, styles.remove)}
					>
						&#10007;
					</button>
				</div>
				<button type="button" className={styles.moveToProgressBtn} title="Move to progress">&#10095;</button>
			</div>
		</div>
	);
};

export default AwaitingStartItem;
