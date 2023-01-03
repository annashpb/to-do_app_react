import React from 'react';
import { stats, dateToDisplay } from '../../../utils';
import ChecklistCheckbox from './ChecklistCheckbox';
import styles from './styles.module.scss';

const CardText = ({ item }) => {
	const { title, description, status, checklist } = item;

	return (
		<>
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
				status === stats.inprog ? (
					<ul>
						{checklist.map(CLitem => (
							<li key={CLitem}>
								<ChecklistCheckbox item={CLitem} />
							</li>
						))}
					</ul>
				) : (
					<ul>
						{checklist.map(CLitem => (
							<li key={CLitem}>{CLitem}</li>
						))}
					</ul>
				)
			)}
			{status !== stats.done && (
				<>
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
				</>
			)}
		</>
	);
};

export default CardText;
