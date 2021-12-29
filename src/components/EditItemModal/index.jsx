import React from 'react';
import styles from './styles.module.scss';

const EditItemModal = ({ close }) => {
	const closeModal = e => {
		if (e.target === e.currentTarget) {
			close();
		}
	}

	return (
		<div className={styles.modalBG} onClick={closeModal}>
			<div className={styles.modal}>
				<div className={styles.btnWrapper}>
					<button
						type="button"
						onClick={close}
						className={styles.closeBtn}
					>
						&#10007;
					</button>
				</div>
				<p>hello world</p>
			</div>
		</div>
	);
};

export default EditItemModal;
