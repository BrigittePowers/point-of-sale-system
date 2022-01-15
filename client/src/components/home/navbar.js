import React from 'react';
// import { useMutation } from '@apollo/react-hooks';

export default function navbar({ currentTab, handleTabChange }) {
	return (
		<div>
			<button onClick={() => handleTabChange('Dashboard')}>Main</button>
			<button onClick={() => handleTabChange('Orders')}>Recall</button>
		</div>
	);
}
