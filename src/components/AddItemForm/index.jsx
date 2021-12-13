import React from 'react';
import Checklist from './Checklist';
import styles from './styles.module.scss';

const AddItemForm = () => {
	const formSubmitHandle = e => {
		e.preventDefault();

		const results = {};
		Object.values(e.target).filter(item => item.name).map(item => results[item.name] = item.value);
		console.log(results);
	}

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
				/>
			</div>

			<div className={styles.inputContainer}>
				<label htmlFor="description">
					Description
				</label>
				<textarea
					name="description"
					rows="5"
				/>
			</div>

			<div className={styles.inputContainer}>
				<div>
					Checklist
				</div>
				<div>
					<Checklist />
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
					/>
					<input
						type="time"
						name="due-time"
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
							className={styles.timeReqInput}
						/>
						<label htmlFor="nr-of-mins" className={styles.timeReqLabel}>Minutes</label>
					</div>
				</div>
			</div>

			<div className={styles.inputContainer}>
				<div />
				<div>
					<button type="submit" className={styles.submitBtn}>Create</button>
				</div>
			</div>
		</form>
	);
};

export default AddItemForm;
