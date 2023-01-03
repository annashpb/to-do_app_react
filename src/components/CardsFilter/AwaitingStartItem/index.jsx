import React, { useState } from 'react';
import { stats } from '../../../utils';
import CardText from '../../CardParticles/CardText';
import CardStatus from '../../CardParticles/CardStatus';
import CardControls from '../../CardParticles/CardControls';
import EditItemModal from '../../EditItemModal';

const AwaitingStartItem = ({ item }) => {
	const [modalOpened, setModalOpened] = useState(false);

	return (
		<>
			<div className="cardContainer">
				<CardText item={item} />
				<CardStatus item={item} isAwaiting />
				<CardControls id={item.id} forwardStat={stats.inprog} setModalOpened={setModalOpened} />
			</div>
			{modalOpened &&
				<EditItemModal item={item} close={() => setModalOpened(false)} />
			}
		</>
	);
};

export default AwaitingStartItem;
