import React, { useState, useRef } from 'react';
import './styles.scss';

const Checklist = () => {
	const [addChecklistItem, setAddChecklistItem] = useState(false);
	const [checklist, setChecklist] = useState([]);
	const newChecklistItem = useRef();

	const newChecklistItemHandle = () => {
		setAddChecklistItem(true);
	}

	const addChecklistItemHandle = () => {		
		if (newChecklistItem && newChecklistItem.current && newChecklistItem.current.value && newChecklistItem.current.value.length > 0) {
			checklist.push(newChecklistItem.current.value);
			setChecklist(checklist);
			setAddChecklistItem(false);
		}
	}

	const cancelChecklistItemHandle = () => {
		setAddChecklistItem(false);
	}

	const removeChecklistItemHandle = i => {
		const CL = [...checklist];
		CL.splice(i, 1);
		setChecklist(CL);
	}

	return (
		<>
			{checklist.length > 0 && (
				<ul style={{ marginTop: '0' }}>
					{checklist.map((item, i) => (
						<li className="checklistItem">
							<span>{item}</span>
							<button
								type="button"
								name="edit-checklist-item"
								title="Edit"
								// onClick={() => editChecklistItemHandle(i)}
								className="itemBtn edit"
							>
								&#9998;
							</button>
							<button
								type="button"
								name="remove-checklist-item"
								title="Remove item"
								onClick={() => removeChecklistItemHandle(i)}
								className="itemBtn remove"
							>
								&#10007;
							</button>
						</li>
					))}
				</ul>
			)}
			{addChecklistItem && (
				<div className="newItemWrapper">
					<input type="text" name="checklist-item" autoFocus={true} ref={newChecklistItem} />
					<button
						type="button"
						name="add-checklist-item"
						title="Add item"
						onClick={addChecklistItemHandle}
						className="newItemBtn add"
					>
						&#10003;
					</button>
					<button
						type="button"
						name="cancel-checklist-item"
						title="Cancel"
						onClick={cancelChecklistItemHandle}
						className="newItemBtn cancel"
					>
						&#10007;
					</button>
				</div>
			)}
			<button
				type="button"
				onClick={newChecklistItemHandle}
				className="addItemBtn"
				disabled={addChecklistItem}
			>
				Add item
			</button>
		</>
	)
};

export default Checklist;
