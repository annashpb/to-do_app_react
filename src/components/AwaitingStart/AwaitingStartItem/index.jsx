import React from 'react';
import classnames from 'classnames';
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
				<p className={classnames(styles.particle, styles.description)}>
					{item.description}
				</p>
			)}
		</div>
	);
};

export default AwaitingStartItem;
