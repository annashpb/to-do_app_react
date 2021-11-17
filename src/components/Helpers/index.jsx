import React from 'react';
import './styles.scss';

const BoxWrapper = ({ title, children }) => (
	<div className="boxWrapper">
		<div className="boxTitleWrapper">
			<h2 className="boxTitle">
				{title}
			</h2>
		</div>
		<div className="boxContentWrapper">
			{children}
		</div>
	</div>
);

export { BoxWrapper };
