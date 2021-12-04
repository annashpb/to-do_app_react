import React, { useState, useRef } from 'react';
import './styles.scss';

const AddItemForm = () => {
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

	return (
		<form>
			<div className="inputContainer">
				<label htmlFor="title">
					<span style={{ color: 'red' }}>*</span>
					{` Title`}
				</label>
				<input
					type="text"
					name="title"
					required
				/>
			</div>

			<div className="inputContainer">
				<label htmlFor="description">
					Description
				</label>
				<textarea
					name="description"
					rows="5"
				/>
			</div>

			<div className="inputContainer">
				<div>
					Checklist
				</div>
				<div>
					{checklist.length > 0 && (
						<ul style={{ marginTop: '0' }}>
							{checklist.map(item => (
								<li className="checklistItem">{item}</li>
							))}
						</ul>
					)}
					{addChecklistItem && (
						<div className="newCIWrapper">
							<input type="text" name="checklist-item" autoFocus={true} ref={newChecklistItem} />
							<button
								type="button"
								name="add-checklist-item"
								onClick={addChecklistItemHandle}
								className="newCIBtn add"
							>
								&#10003;
							</button>
							<button
								type="button"
								name="cancel-checklist-item"
								onClick={cancelChecklistItemHandle}
								className="newCIBtn cancel"
							>
								&#10007;
							</button>
						</div>
					)}
					<button
						type="button"
						onClick={newChecklistItemHandle}
						className="checklistAddBtn"
						disabled={addChecklistItem}
					>
						Add item
					</button>
				</div>
			</div>

			<div className="inputContainer">
				<label htmlFor="duedate">
					Due date
				</label>
				<input
					type="datetime-local"
					name="duedate"
				/>
			</div>

			<div className="inputContainer">
				<span>Time required</span>
				<div className="timeReqWrapper">
					<div className="timeReqBox">
						<input
							type="number"
							name="nr-of-days"
							min="0"
							max="99"
							step="1"
							className="timeReqInput"
						/>
						<label htmlFor="nr-of-days" className="timeReqLabel">Days</label>
					</div>

					<div className="timeReqBox">
						<input
							type="number"
							name="nr-of-hours"
							min="0"
							max="23"
							step="1"
							className="timeReqInput"
						/>
						<label htmlFor="nr-of-hours" className="timeReqLabel">Hours</label>
					</div>

					<div className="timeReqBox">
						<input
							type="number"
							name="nr-of-mins"
							min="0"
							max="59"
							step="1"
							className="timeReqInput"
						/>
						<label htmlFor="nr-of-mins" className="timeReqLabel">Minutes</label>
					</div>
				</div>
			</div>
		</form>
	);
};

export default AddItemForm;
