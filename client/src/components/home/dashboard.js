import React, { useState } from 'react';
// import { useMutation } from '@apollo/react-hooks';
import Ticket from '../tabs/ticket';
import Menu from '../tabs/menu';
import Mods from '../tabs/mods';

import { useQuery } from '@apollo/client';
import { QUERY_ITEMS } from '../../utils/queries';

export default function Dashboard() {
	// change tabs from menu or mods
	const [currentTab, setCurrentTab] = useState('Menu');
	// change category for mods
	const [currentCat, setCat] = useState('None');

	// Query for items saved to server
	const { data } = useQuery(QUERY_ITEMS);
	const items = data?.items || [];

	const handleTabChange = (tab) => setCurrentTab(tab);
	const handleCatChange = (cat) => setCat(cat);

	const renderTab = () => {
		if (currentTab === 'Menu') {
			return (
				<Menu
					items={items}
					currentTab={currentTab}
					currentCat={currentCat}
					handleTabChange={handleTabChange}
					handleCatChange={handleCatChange}
				/>
			);
		}
		if (currentTab === 'Mods') {
			return (
				<Mods
					items={items}
					currentTab={currentTab}
					currentCat={currentCat}
					handleTabChange={handleTabChange}
					handleCatChange={handleCatChange}
				/>
			);
		}
	};

	return (
		<div>
			<Ticket />
			{renderTab()}
		</div>
	);
}
