import React from 'react';

export default function mods({
	items,
	currentCat,
	currentTab,
	handleTabChange,
}) {
	function generateSections(opt) {
		let types = [];

		// const unique = [...new Set(types)];

		opt.map((opt) => {
			let typeList = types.push(opt.type);
			return typeList;
		});

		let unique = [...new Set(types)];

		return unique;

		// console.log(cats);
	}

	let sections = generateSections(currentCat);

	return (
		<div>
			{sections.map((sec) => (
				<div key={sec}>
					<h1>{sec}</h1>
					{currentCat.map((opt) => (
						<div key={opt._id}>
							{opt.type === sec && (
								<button onClick={() => handleTabChange('Mods')}>
									<div>{opt.name}</div>
									{opt.adjust > 0 && <div>{opt.adjust}</div>}
								</button>
							)}
						</div>
					))}
				</div>
			))}

			{/* {currentCat.map((opt) => (
				<button key={opt._id} onClick={() => handleTabChange('Mods')}>
					<div>{opt.name}</div>
					{opt.adjust > 0 && <div>{opt.adjust}</div>}
				</button>
			))} */}
			<button onClick={() => handleTabChange('Menu')}>Return</button>
		</div>
	);
}
