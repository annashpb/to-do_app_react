import React from 'react';
import { dateToDisplay } from '../../../utils';
import styles from './styles.module.scss';

const AwaitingStartItem = ({ item }) => {

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
		</div>
	);
};

export default AwaitingStartItem;
