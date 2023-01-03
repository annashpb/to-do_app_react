import React, { useState } from 'react';
import styles from './styles.module.scss';

const ChecklistCheckbox = ({ item }) => {
	const [checked, setChecked] = useState(false);
	const itemId = item.toLowerCase().replaceAll(' ', '-');

	const crossItem = () => {
		setChecked(!checked);
	}

	return (
		<>
			<input type="checkbox" id={itemId} checked={checked} onChange={crossItem} />
			<label htmlFor={itemId} className={checked ? styles.crossed : null}>{item}</label>
		</>
	)
};

export default ChecklistCheckbox;
