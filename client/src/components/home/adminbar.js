import React from 'react';
// import { useMutation } from '@apollo/react-hooks';

export default function adminbar({ handleTabChange }) {
	return (
		<div className='admin-bar'>
			<div className='admin-basic'>
				<div>5:30 AM</div>
				<div> -- Hi, Brigitte!</div>
			</div>
			<div>DemoCo PoS System</div>
			<div className='admin-buttons'>
				<button
					onClick={() => {
						handleTabChange('Dashboard');
					}}
				>
					Dashboard
				</button>
				<button
					onClick={() => {
						handleTabChange('Orders');
					}}
				>
					Recall
				</button>
				<button>Clock Out</button>
			</div>
		</div>
	);
}
