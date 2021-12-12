import React, { useState, useRef } from 'react';
import styles from './styles.module.scss';

const Checklist = () => {
	const [checklist, setChecklist] = useState([]);

	const [addChecklistItem, setAddChecklistItem] = useState(false);
	const newChecklistItem = useRef();

	const [itemEditing, setItemEditing] = useState(null); // index of the item
	const [itemOnEditText, setItemOnEditText] = useState(null); // new text of the item currently editing
	const itemOnEdit = useRef();

	/* ADD CHECKLIST ITEM HANDLERS */
	// This gonna set up an input field for a new checklist item
	const newItemHandle = () => {
		setAddChecklistItem(true);
	}

	// A new inputted item gonna be added to the checklist
	const addItemHandle = () => {		
		if (newChecklistItem && newChecklistItem.current && newChecklistItem.current.value && newChecklistItem.current.value.length > 0) {
			checklist.push(newChecklistItem.current.value);
			setChecklist(checklist);
			setAddChecklistItem(false);
		}
	}

	// Possibility to add a new item on the Enter key press either
	const enterPressHandle = ({ key }) => {
		if (key === 'Enter') {
			addItemHandle();
		}
	}

	// Input field gonna be removed, and the item not gonna be added
	const cancelItemHandle = () => {
		setAddChecklistItem(false);
	}

	/* EDIT CHECKLIST ITEM HANDLERS */
	// Item edited gonna be changed to an input field
	const startEditItemHandle = i => {
		setItemEditing(i);
		setItemOnEditText(checklist[i]); // to have a flexibility on text editing
	}

	// Handling the changes on the input field of the item editing
	const editItemTextHandle = ({ target }) => {
		setItemOnEditText(target.value);
	}

	// Input field gonna be changed back to the text feld, WITH the new text
	const approveChangesHandle = i => {
		const CL = [...checklist];
		CL.splice(i, 1, itemOnEditText); // replace the item on the existing array with the new text
		setChecklist(CL);
		setItemEditing(null); // no items are on edit from now
		setItemOnEditText(null); // no text on edit from now
	}

	// Possibility to approve changes the Enter key press either
	const editEnterPressHandle = (e, i) => {
		if (e.key === 'Enter') {
			approveChangesHandle(i);
		}
	}

	// Input field gonna be changed back to the text feld, WITHOUT the new text
	const cancelChangesHandle = () => {
		setItemEditing(null);
		setItemOnEditText(null);
	}

	const removeItemHandle = i => {
		const CL = [...checklist];
		CL.splice(i, 1); // remove the item from the checklist
		setChecklist(CL);
	}

	return (
		<>
			{checklist.length > 0 && (
				<ul style={{ marginTop: '0' }}>
					{checklist.map((item, i) => (
						i === itemEditing
							? (
								/* If the current item is the one on edit now, an input field gonna be rendered */
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
								/* In other cases a text field gonna be rendered, with edit and removing options */
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
				disabled={addChecklistItem} // disabled, if there is already a new item input field opened
			>
				Add item
			</button>
		</>
	)
};

export default Checklist;
