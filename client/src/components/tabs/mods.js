import React from 'react';

export default function mods({ items, currentCat, handleTabChange }) {

	//TODO: Sort 

	console.log(currentCat);
	let categories = []
	categories = currentCat.forEach(obj => {
		// console.log(obj.category);
		categories.push(obj.category);
		console.log(currentCat);
		return currentCat;
	});
	console.log(categories);
	// let categories = currentCat.array.forEach((obj) => {
	// 	console.log(obj);
	// });
	// let unique = [...new Set(categories)];

	return (
		<div>
			{currentCat.map((opt) => (
				<button key={opt._id} onClick={() => handleTabChange('Mods')}>
					<div>{opt.name}</div>
					<div>{/* {if (opt.adjust)}S */}</div>
				</button>
			))}
			<button onClick={() => handleTabChange('Menu')}>Return</button>
		</div>
	);
}
