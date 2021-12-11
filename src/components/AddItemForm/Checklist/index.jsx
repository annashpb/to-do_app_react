import React, { useState, useRef } from 'react';
import styles from './styles.module.scss';

const Checklist = () => {
	const [addChecklistItem, setAddChecklistItem] = useState(false);
	const [checklist, setChecklist] = useState([]);
	const newChecklistItem = useRef();

	const newItemHandle = () => {
		setAddChecklistItem(true);
	}

	const addItemHandle = () => {		
		if (newChecklistItem && newChecklistItem.current && newChecklistItem.current.value && newChecklistItem.current.value.length > 0) {
			checklist.push(newChecklistItem.current.value);
			setChecklist(checklist);
			setAddChecklistItem(false);
		}
	}

	const enterPressHandle = ({ key }) => {
		if (key === 'Enter') {
			addItemHandle();
		}
	}

	const cancelItemHandle = () => {
		setAddChecklistItem(false);
	}

	const removeItemHandle = i => {
		const CL = [...checklist];
		CL.splice(i, 1);
		setChecklist(CL);
	}

	return (
		<>
			{checklist.length > 0 && (
				<ul style={{ marginTop: '0' }}>
					{checklist.map((item, i) => (
						<li className={styles.checklistItem}>
							<span>{item}</span>
							<button
								type="button"
								name="edit-checklist-item"
								title="Edit"
								// onClick={() => editChecklistItemHandle(i)}
								className={`${styles.itemBtn} ${styles.edit}`}
							>
								&#9998;
							</button>
							<button
								type="button"
								name="remove-checklist-item"
								title="Remove item"
								onClick={() => removeItemHandle(i)}
								className={`${styles.itemBtn} ${styles.remove}`}
							>
								&#10007;
							</button>
						</li>
					))}
				</ul>
			)}
			{addChecklistItem && (
				<div className={styles.newItemWrapper}>
					<input
						type="text"
						name="checklist-item"
						autoFocus={true}
						ref={newChecklistItem}
						onKeyPress={enterPressHandle}
					/>
					<button
						type="button"
						name="add-checklist-item"
						title="Add item"
						onClick={addItemHandle}
						className={`${styles.newItemBtn} ${styles.add}`}
					>
						&#10003;
					</button>
					<button
						type="button"
						name="cancel-checklist-item"
						title="Cancel"
						onClick={cancelItemHandle}
						className={`${styles.newItemBtn} ${styles.cancel}`}
					>
						&#10007;
					</button>
				</div>
			)}
			<button
				type="button"
				onClick={newItemHandle}
				className={styles.addItemBtn}
				disabled={addChecklistItem}
			>
				Add item
			</button>
		</>
	)
};

export default Checklist;
