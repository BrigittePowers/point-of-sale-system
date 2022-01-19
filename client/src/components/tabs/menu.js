import React from 'react';
import '../../index.css';

export default function Menu({
	items,
	handleTabChange,
	handleCatChange,
	handleSelectedMenuItemChange,
	handlePendingMenuCost,
	handleSelectedItemDef
}) {
	return (
		<div className='menu-box'>
			{items.map((item) => (
				<button
					key={item._id}
					onClick={() => {
						handleTabChange('Mods');
						handleCatChange(item.options);
						handleSelectedItemDef(item.defaults);
						handleSelectedMenuItemChange(item.name);
						handlePendingMenuCost(item.price);
					}}
				>
					<div>{item.name}</div>
					<div>{item.price}</div>
				</button>
			))}
		</div>
	);
}
