import React, { useState, useEffect } from 'react';
import createUID from 'create-unique-id';
import Checklist from './Checklist';
import styles from './styles.module.scss';
import { stats } from '../../utils';

const AddItemForm = ({ initialData = null }) => {
	const [toDos, setToDos] = useState(JSON.parse(localStorage.getItem('toDoItems')) || []);
	const [checklist, setChecklist] = useState([]);
	const [clCleared, setClCleared] = useState(false);

	const clearFields = (e) => {
		Array.from(e.target).forEach((evt) => (evt.value = ''));
		setClCleared(true);
		setTimeout(() => setClCleared(false), 0);
	}

	const formSubmitHandle = e => {
		e.preventDefault();

		const results = {};
		Object.values(e.target).filter(item => item.name).map(item => results[item.name] = item.value);
		results.checklist = checklist;

		if (initialData) {
			const newToDos = toDos.slice(0);
			const index = toDos.findIndex(object => object.id === initialData.id);
			results.status = initialData.status;
			results.id = initialData.id;
			newToDos[index] = results;
			setToDos(newToDos);
		} else {
			results.status = stats.aws;
			results.id = createUID(10);		
			setToDos([...JSON.parse(localStorage.getItem('toDoItems')), results]);
			clearFields(e);
		}
	};

	useEffect(() => {
		localStorage.setItem('toDoItems', JSON.stringify(toDos));
		document.dispatchEvent(new Event('lsItemManipulation'));
	}, [toDos]);

	return (
		<form onSubmit={formSubmitHandle}>
			<div className={styles.inputContainer}>
				<label htmlFor="title">
					<span style={{ color: 'red' }}>*</span>
					{` Title`}
				</label>
				<input
					type="text"
					name="title"
					required
					defaultValue={initialData && initialData.title}
				/>
			</div>

			<div className={styles.inputContainer}>
				<label htmlFor="description">
					Description
				</label>
				<textarea
					name="description"
					rows="5"
					defaultValue={initialData && initialData.description}
				/>
			</div>

			<div className={styles.inputContainer}>
				<div>
					Checklist
				</div>
				<div>
					<Checklist
						initialChecklist={initialData && initialData.checklist}
						cleared={clCleared}
						setResultChecklist={setChecklist}
					/>
				</div>
			</div>

			<div className={styles.inputContainer}>
				<label htmlFor="duedate">
					Due date
				</label>
				<div className={styles.dateTimePicker}>
					<input
						type="date"
						name="due-date"
						defaultValue={initialData && initialData['due-date']}
					/>
					<input
						type="time"
						name="due-time"
						defaultValue={initialData && initialData['due-time']}
					/>
				</div>
			</div>

			<div className={styles.inputContainer}>
				<span>Time required</span>
				<div className={styles.timeReqWrapper}>
					<div className={styles.timeReqBox}>
						<input
							type="number"
							name="nr-of-days"
							min="0"
							max="99"
							step="1"
							defaultValue={initialData && initialData['nr-of-days']}
							className={styles.timeReqInput}
						/>
						<label htmlFor="nr-of-days" className={styles.timeReqLabel}>Days</label>
					</div>

					<div className={styles.timeReqBox}>
						<input
							type="number"
							name="nr-of-hours"
							min="0"
							max="23"
							step="1"
							defaultValue={initialData && initialData['nr-of-hours']}
							className={styles.timeReqInput}
						/>
						<label htmlFor="nr-of-hours" className={styles.timeReqLabel}>Hours</label>
					</div>

					<div className={styles.timeReqBox}>
						<input
							type="number"
							name="nr-of-mins"
							min="0"
							max="59"
							step="1"
							defaultValue={initialData && initialData['nr-of-mins']}
							className={styles.timeReqInput}
						/>
						<label htmlFor="nr-of-mins" className={styles.timeReqLabel}>Minutes</label>
					</div>
				</div>
			</div>

			<div className={styles.inputContainer}>
				<div />
				<div>
					<button type="submit" className={styles.submitBtn}>
						{initialData ? 'Edit' : 'Create'}
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddItemForm;
