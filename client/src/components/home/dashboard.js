import React, { useState } from 'react';
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

	const generateOrderItem = (menuItem, menuMod) => {
		setPendingOrderItem({
			name: selectedMenuItem,
			mods: [{ ...selectedMenuMod }],
		});
	};

	const generateTicket = (pendingOrderItem) => {
		setPendingTicket([...pendingTicket, { ...pendingOrderItem }]);
	};

	// generateOrderItem(menuItem, menuMod);
	// generateTicket(pendingOrderItem);
	// pending ticket is an array of objects with matching IDs from the top menuitem that was clicked
	//we can now slice it out of the array when adding mods
	// findindex where i.id === item.id

	//new setState var b  [...a, new items]
	// pendingOrder =[{name: Hamburger, Mods: }]
	// const settyopelevelitem [
	// add top level item
	//

	// Query for items saved to server
	const { data } = useQuery(QUERY_ITEMS);
	const items = data?.items || [];

	const handleTabChange = (tab) => setCurrentTab(tab);
	const handleCatChange = (cat) => setCat(cat);
	const handleSelectedMenuItemChange = (menuItem) =>
		setSelectedMenuItem(menuItem);
	const handleSelectedMenuMod = (menuMod) => setSelectedMenuMod(menuMod);

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
					handleSelectedMenuItemChange={handleSelectedMenuItemChange}
					handleTabChange={handleTabChange}
					handleCatChange={handleCatChange}
					handleSelectedMenuMod={handleSelectedMenuMod}
					generateOrderItem={generateOrderItem}
					generateTicket={generateTicket}
				/>
			);
		}
	};

	return (
		<div>
			<Ticket pendingTicket={pendingTicket} />
			{renderTab()}
		</div>
	);
}
