import React from 'react';

export default function mods({
	items,
	currentCat,
	currentTab,
	handleTabChange,
}) {
	// generate header sections for mods page
	function generateSections(opt) {
		let types = [];

		// map through options and create an array of
		// types that each option may have
		opt.map((opt) => {
			let typeList = types.push(opt.type);
			return typeList;
		});

		// remove duplicates
		let unique = [...new Set(types)];

		return unique;
	}

	//invoke
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

			<button onClick={() => handleTabChange('Menu')}>Return</button>
		</div>
	);
}
