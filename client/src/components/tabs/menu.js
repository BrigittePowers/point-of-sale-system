import React from 'react';
import '../../index.css';

export default function Menu({
	items,
	handleTabChange,
	handleCatChange,
	handleSelectedMenuItemChange,
	handlePendingMenuCost,
}) {
	return (
		<div className='menu-box'>
			{items.map((item) => (
				<button
					key={item._id}
					onClick={() => {
						handleTabChange('Mods');
						handleCatChange(item.options);
						handleSelectedMenuItemChange(item.name);
						handlePendingMenuCost(item.price);
					}}
				>
					<div>{item.acronym}</div>
					<div>{item.price}</div>
				</button>
			))}
		</div>
	);
}
