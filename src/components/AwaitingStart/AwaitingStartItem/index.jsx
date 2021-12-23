import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

const AwaitingStartItem = ({ item }) => {

	return (
		<div className={styles.container}>
			<p className={styles.cardTitle}>
				{item.title}
			</p>
			<p className={classnames(styles.particle, styles.description)}>
				{item.description}
			</p>
		</div>
	);
};

export default AwaitingStartItem;
