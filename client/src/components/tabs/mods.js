import React from 'react';

export default function mods({ food, currentTab, handleTabChange }) {
	return (
		<div>
			{food.map((food) => (
				<button
					key={`${food.modifiers.name}`}
					onClick={() => handleTabChange('Mods')}
				>{`${food.modifiers.name}`}</button>
			))}
			<button onClick={() => handleTabChange('Menu')}>Return</button>
		</div>
	);
}
