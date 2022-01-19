import React, { useEffect } from 'react';

export default function Mods({
	selectedMenuMod,
	pendingModsCost,
	pendingMenuCost,
	currentCat,
	handleTabChange,
	selectedMenuItem,
	handleSelectedMenuMod,
	handleSelectedMenuItemChange,
	generateOrderItem,
	handlePendingModsCost,
	handlePendingMenuCost,
	handlePendingSubTotal,
	pendingSubTotal,
	selectedItemDef,
}) {
	//toggle button active or inactive for css
	const handleToggle = (id) => {
		let btn = document.getElementById(id);
		btn.classList.toggle('button-on');
	};

	// check active buttons against default item list
	useEffect(() => {
		for (let x = 0; x < currentCat.length; x++) {
			let btn = document.getElementById(x);
			let arr = selectedItemDef;
			let index = arr.findIndex((mod) => mod === btn.name);
			if (index > -1) {
				btn.classList.toggle('button-on');
			}
		}
		handleSelectedMenuMod([...selectedMenuMod, ...selectedItemDef]);
	}, []);

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
		<div className='mod-window'>
			<div>Modify {selectedMenuItem}: </div>
			{sections.map((sec) => (
				<div className='mod-box' key={sec}>
					{/* <h1 className='section-name'>{sec}</h1> */}
					<div className='section-list'>
						{currentCat.map((opt, idx) => (
							<div key={opt._id}>
								{opt.type === sec && (
									<button
										id={idx}
										name={opt.name}
										value={opt.adjust}
										onClick={() => {
											let indexOfMod =
												selectedMenuMod.findIndex(
													(mod) => mod === opt.name,
												);
											handleToggle(idx);
											if (indexOfMod === -1) {
												handleSelectedMenuMod([
													...selectedMenuMod,
													opt.name,
												]);
												handlePendingModsCost(
													pendingModsCost +
														opt.adjust,
												);
											} else {
												selectedMenuMod.splice(
													indexOfMod,
													1,
												);
												handleSelectedMenuMod([
													...selectedMenuMod,
												]);
												handlePendingModsCost(
													pendingModsCost -
														opt.adjust,
												);
											}
										}}
									>
										<div>{opt.name}</div>
										{opt.adjust > 0 && (
											<div>${opt.adjust}</div>
										)}
									</button>
								)}
							</div>
						))}
					</div>
				</div>
			))}
			<div className='btn-box'>
				<button
					className='cancel-btn'
					onClick={() => {
						handleTabChange('Menu');
						handleSelectedMenuItemChange('');
						handleSelectedMenuMod([]);
						handlePendingMenuCost(0);
						handlePendingModsCost(0);
					}}
				>
					Cancel
				</button>

				<button
					className='confirm-btn'
					onClick={() => {
						generateOrderItem(selectedMenuItem, selectedMenuMod);
						handlePendingSubTotal(
							pendingSubTotal + pendingModsCost + pendingMenuCost,
						);
						handleTabChange('Menu');
						handleSelectedMenuItemChange('');
						handleSelectedMenuMod([]);
						handlePendingMenuCost(0);
						handlePendingModsCost(0);
					}}
				>
					Confirm
				</button>
			</div>
		</div>
	);
}
