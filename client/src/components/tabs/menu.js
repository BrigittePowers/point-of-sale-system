import React from 'react';

export default function Menu({ items, handleTabChange, handleCatChange }) {
	return (
		<div>
			{items.map((item) => (
				<button
					key={item._id}
					onClick={() => {
						handleTabChange('Mods');
						handleCatChange(item.options);
					}}
				>
					<div>{item.acronym}</div>
					<div>{item.price}</div>
				</button>
			))}
		</div>
	);
}
