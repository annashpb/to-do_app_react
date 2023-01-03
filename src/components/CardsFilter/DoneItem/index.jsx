import React from 'react';
import CardText from '../../CardParticles/CardText';
import RemoveItemBtn from '../../CardParticles/RemoveItemBtn';

const DoneItem = ({ item }) => (
	<div className="cardContainer" style={{ color: '#858585' }}>
		<CardText item={item} />
		<RemoveItemBtn id={item.id} />
	</div>
);

export default DoneItem;
