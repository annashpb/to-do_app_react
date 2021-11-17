import React from 'react';
import './styles.scss';

const AddItemForm = () => {
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
