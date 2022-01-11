import React from 'react';

export default function Menu({ food, currentTab, handleTabChange }) {
	return (
		<div>
			{food.map(( food ) => (
				<button key={`${food.acronym}`}
					onClick={() => handleTabChange('Mods')}
				>{`${food.acronym}`}</button>
			))}
		</div>
	);
}
