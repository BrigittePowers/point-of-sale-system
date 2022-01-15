import React from 'react';

export default function mods({
	items,
	selectedMenuMod,
	currentCat,
	currentTab,
	handleTabChange,
	selectedMenuItem,
	pendingOrderItem,
	handleSelectedMenuMod,
	handleSelectedMenuItemChange,
	generateOrderItem,
	generateTicket,
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
								<button
									onClick={() => {
										let indexOfMod =
											selectedMenuMod.findIndex(
												(mod) => mod === opt.name,
											);
										if (indexOfMod === -1) {
											handleSelectedMenuMod([
												...selectedMenuMod,
												opt.name,
											]);
										} else {
											selectedMenuMod.splice(
												indexOfMod,
												1,
											);
											handleSelectedMenuMod([
												...selectedMenuMod,
											]);
										}
									}}
								>
									<div>{opt.name}</div>
									{opt.adjust > 0 && <div>{opt.adjust}</div>}
								</button>
							)}
						</div>
					))}
				</div>
			))}

			<button
				onClick={() => {
					handleTabChange('Menu');
					handleSelectedMenuItemChange('');
					handleSelectedMenuMod([]);
				}}
			>
				Cancel
			</button>

			<button
				onClick={ () => {
					generateOrderItem(selectedMenuItem, selectedMenuMod);
					handleTabChange('Menu');
					handleSelectedMenuItemChange('');
					handleSelectedMenuMod([]);
					generateTicket(pendingOrderItem);
				}}
			>
				Confirm
			</button>
		</div>
	);
}
