import React from 'react';

export default function Menu({
	items,
	handleTabChange,
	handleCatChange,
	handleSelectedMenuItemChange,
}) {
	return (
		<div>
			<div>
				{items.map((item) => (
					<button
						key={item._id}
						onClick={() => {
							handleTabChange('Mods');
							handleCatChange(item.options);
							handleSelectedMenuItemChange(item.name);
						}}
					>
						<div>{item.acronym}</div>
						<div>{item.price}</div>
					</button>
				))}
			</div>
		</div>
	);
}
