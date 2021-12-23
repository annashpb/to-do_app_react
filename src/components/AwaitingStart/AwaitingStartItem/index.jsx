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
				<p>
					<span>Due date:&nbsp;</span>
					<span>
						{`${dateToDisplay(item['due-date'])} ${item['due-time']}`}
					</span>
				</p>
			)}
		</div>
	);
};

export default AwaitingStartItem;
