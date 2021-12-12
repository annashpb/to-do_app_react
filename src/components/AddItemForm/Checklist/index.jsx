import React, { useState, useRef } from 'react';
import styles from './styles.module.scss';

const Checklist = () => {
	const [checklist, setChecklist] = useState([]);

	const [addChecklistItem, setAddChecklistItem] = useState(false);
	const newChecklistItem = useRef();

	const [itemEditing, setItemEditing] = useState(null);
	const [itemOnEditText, setItemOnEditText] = useState(null);
	const itemOnEdit = useRef();

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

	const startEditItemHandle = i => {
		setItemEditing(i);
		setItemOnEditText(checklist[i]);
	}

	const editItemTextHandle = ({ target }) => {
		setItemOnEditText(target.value);
	}

	const approveChangesHandle = i => {
		const CL = [...checklist];
		CL.splice(i, 1, itemOnEditText);
		setChecklist(CL);
		setItemEditing(null);
		setItemOnEditText(null);
	}

	const editEnterPressHandle = (e, i) => {
		if (e.key === 'Enter') {
			approveChangesHandle(i);
		}
	}

	const cancelChangesHandle = () => {
		setItemEditing(null);
		setItemOnEditText(null);
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
						i === itemEditing
							? (
								<li className={styles.newItemWrapper}>
									<input
										type="text"
										value={itemOnEditText}
										name="checklist-item"
										autoFocus={true}
										ref={itemOnEdit}
										onChange={editItemTextHandle}
										onKeyPress={e => editEnterPressHandle(e, i)}
									/>
									<button
										type="button"
										name="add-checklist-item"
										title="Add item"
										onClick={() => approveChangesHandle(i)}
										className={`${styles.newItemBtn} ${styles.add}`}
									>
										&#10003;
									</button>
									<button
										type="button"
										name="cancel-checklist-item"
										title="Cancel"
										onClick={cancelChangesHandle}
										className={`${styles.newItemBtn} ${styles.cancel}`}
									>
										&#10007;
									</button>
								</li>
							) : (
								<li className={styles.checklistItem}>
									<span>{item}</span>
									<button
										type="button"
										name="edit-checklist-item"
										title="Edit"
										onClick={() => startEditItemHandle(i)}
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
							)
						)
					)}
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
