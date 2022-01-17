import React, { useEffect, useState } from 'react';
// import { useMutation } from '@apollo/react-hooks';
import Menu from '../tabs/menu';
import Mods from '../tabs/mods';
import Ticket from '../tabs/ticket';

import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../utils/queries';

export default function Dashboard() {
	// change tabs from menu or mods
	const [currentTab, setCurrentTab] = useState('Menu');
	// change category for mods
	const [currentCat, setCat] = useState('None');
	// set the menuItem that was clicked in Menu
	const [selectedMenuItem, setSelectedMenuItem] = useState('');
	// form an array of the modifiers to the selected menu item
	const [selectedMenuMod, setSelectedMenuMod] = useState([]);
	// create an object from the menu item and its modifiers
	const [pendingOrderItem, setPendingOrderItem] = useState({});
	// display where we add pendingOrderItem to the pending ticket array
	const [pendingTicket, setPendingTicket] = useState([]);
	// find the price of items in the order
	const [pendingMenuCost, setPendingMenuCost] = useState(0);
	const [pendingModsCost, setPendingModsCost] = useState(0);
	const [pendingSubTotal, setPendingSubTotal] = useState(0);
	const [pendingTotal, setPendingTotal] = useState(0);

	useEffect(() => {
		if (Object.keys(pendingOrderItem).length > 0) {
			const generateTicket = (pendingOrderItem) => {
				setPendingTicket((p) => [...p, { ...pendingOrderItem }]);
			};

			generateTicket(pendingOrderItem);
		}
	}, [pendingOrderItem]);

	useEffect(() => {
		const generateTotal = (pendingSubTotal) => {
			setPendingTotal(
				(pendingSubTotal + pendingSubTotal * 0.065).toFixed(2),
			);
		};

		generateTotal(pendingSubTotal);
	}, [pendingSubTotal]);

	// const generateTotal = (pendingSubTotal) => {
	// 	setPendingTotal((p) => p + p * 0.065);
	// };

	const generateOrderItem = (menuItem, menuMod) => {
		setPendingOrderItem({
			name: selectedMenuItem,
			mods: [...selectedMenuMod],
		});
	};

	// Query for items saved to server
	const { data } = useQuery(QUERY_ITEMS);
	const items = data?.items || [];

	const handleTabChange = (tab) => setCurrentTab(tab);
	const handleCatChange = (cat) => setCat(cat);
	const handleSelectedMenuItemChange = (menuItem) =>
		setSelectedMenuItem(menuItem);
	const handleSelectedMenuMod = (menuMod) => setSelectedMenuMod(menuMod);
	const handlePendingMenuCost = (item) => setPendingMenuCost(item);
	const handlePendingModsCost = (item) => setPendingModsCost(item);
	const handlePendingSubTotal = (price) => setPendingSubTotal(price);
	const handlePendingTotal = (price) => setPendingTotal(price);

	const renderTab = () => {
		if (currentTab === 'Menu') {
			return (
				<Menu
					items={items}
					currentTab={currentTab}
					currentCat={currentCat}
					handleTabChange={handleTabChange}
					handleCatChange={handleCatChange}
					handleSelectedMenuItemChange={handleSelectedMenuItemChange}
					handlePendingMenuCost={handlePendingMenuCost}
				/>
			);
		}
		if (currentTab === 'Mods') {
			return (
				<Mods
					items={items}
					currentTab={currentTab}
					currentCat={currentCat}
					selectedMenuItem={selectedMenuItem}
					selectedMenuMod={selectedMenuMod}
					pendingOrderItem={pendingOrderItem}
					pendingModsCost={pendingModsCost}
					pendingMenuCost={pendingMenuCost}
					pendingSubTotal={pendingSubTotal}
					handleSelectedMenuItemChange={handleSelectedMenuItemChange}
					handleTabChange={handleTabChange}
					handleCatChange={handleCatChange}
					handleSelectedMenuMod={handleSelectedMenuMod}
					generateOrderItem={generateOrderItem}
					handlePendingMenuCost={handlePendingMenuCost}
					handlePendingModsCost={handlePendingModsCost}
					handlePendingSubTotal={handlePendingSubTotal}
				/>
			);
		}
	};

	return (
		<div className='dashboard'>
			<Ticket
				pendingMenuCost={pendingMenuCost}
				pendingModsCost={pendingModsCost}
				pendingSubTotal={pendingSubTotal}
				pendingTicket={pendingTicket}
				pendingTotal={pendingTotal}
				handlePendingTotal={handlePendingTotal}
			/>
			{renderTab()}
		</div>
	);
}
