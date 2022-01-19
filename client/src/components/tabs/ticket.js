import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TICKET } from '../../utils/mutations';

export default function Ticket({
	pendingTicket,
	pendingSubTotal,
	pendingTotal,
	handlePendingTicket,
	handlePendingSubTotal,
	handlePendingTotal,
}) {
	const [addTicket, { error }] = useMutation(ADD_TICKET);
	const [name, setName] = useState('');
	const [currentTab, setCurrentTab] = useState('Dine');
	const handleTabChange = (tab) => setCurrentTab(tab);
	const handleNameChange = (name) => setName(name);

	const renderTab = () => {
		if (currentTab === 'Dine') {
			return (
				<div className='ticket-btn-box'>
					<button
						onClick={() => {
							handleNameChange('[DINE IN] - ' + name);
						}}
					>
						Dine In
					</button>
					<button
						onClick={() => {
							handleNameChange('[TO GO] - ' + name);
						}}
					>
						To Go
					</button>
					<button
						className='confirm-btn'
						onClick={() => {
							handleTabChange('Pay');
						}}
					>
						Pay
					</button>
				</div>
			);
		}
		if (currentTab === 'Pay') {
			return (
				<div className='ticket-btn-box'>
					<button
						className='cancel-btn'
						onClick={() => {
							handleTabChange('Dine');
						}}
					>
						Cancel
					</button>
					<button
						onClick={() => {
							handleTabChange('Dine');
							submitTicket('Card');
						}}
					>
						Card
					</button>
					<button
						onClick={() => {
							handleTabChange('Dine');
							submitTicket('Cash');
						}}
					>
						Cash
					</button>
				</div>
			);
		}
	};

	const submitTicket = async (pay) => {
		let currentDate = new Date();
		let time = currentDate.getHours() + ':' + currentDate.getMinutes();

		try {
			await addTicket({
				variables: {
					date: time,
					name,
					paymentType: pay,
					total: pendingTotal,
				},
			});

			clearWindow();
		} catch (err) {
			console.error(error);
		}
	};

	const clearWindow = () => {
		let form = document.getElementById('name-form');
		form.value = '';
		handlePendingTicket([]);
		handlePendingSubTotal(0);
		handlePendingTotal(0);
		handleNameChange('');
	};

	return (
		<div className='ticket-window'>
			<input
				id='name-form'
				type='text'
				className='order-num'
				placeholder='Order Name'
				onChange={(event) => {
					handleNameChange(event.target.value);
				}}
			></input>
			<div className='order-wrapper'>
				<div className='order-window-wrapper'>
					{pendingTicket.map((order, idx) => (
						<div className='order-in-window' key={idx}>
							<div className='order-food-name'>{order.name}</div>
							{order.mods.map((mod, idx) => (
								<div className='order-mods' key={idx}>
									{mod}
								</div>
							))}
						</div>
					))}
				</div>
				<div className='pricing'>
					<div>Sub-Total: {pendingSubTotal.toFixed(2)}</div>
					<div>Tax: {(pendingSubTotal * 0.0625).toFixed(2)}</div>
					<div>Total: {pendingTotal}</div>
				</div>
				<div className='ticket-bottom-name'>{name}</div>
			</div>
			{renderTab()}
		</div>
	);
}
