import React from 'react';

export default function Menu({ items, currentTab, handleTabChange }) {
	return (
		<div>
			{items.map((item) => (
				<button key={item.id} onClick={() => handleTabChange('Mods')}>
					<div>{item.acronym}</div>
					<div>{item.price}</div>
				</button>
			))}
		</div>
	);
}
