import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TICKET } from '../../utils/mutations';

export default function Ticket({
	pendingTicket,
	pendingSubTotal,
	pendingTotal,
}) {
	const [addTicket, { error }] = useMutation(ADD_TICKET);
	const [ticketID, setTicketID] = useState();
	const handleTicketID = (id) => setTicketID(id);
	let currentDate = new Date();
	let time = currentDate.getHours() + ':' + currentDate.getMinutes();

	const submitTicket = async () => {
		try {
			const { data } = await addTicket({
				variables: {
					date: time,
					name: 'Name',
					paymentType: 'Visa',
					total: 10,
				},
			});
			handleTicketID(data.addTicket._id);
		} catch (err) {
			console.error(error);
		}
	};

	return (
		<div className='ticket-window'>
			<div className='order-num'>Order #000</div>
			<div className='order-wrapper'>
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
				<div className='pricing'>
					<div>Sub-Total: {pendingSubTotal.toFixed(2)}</div>
					<div>Tax: {(pendingSubTotal * 0.0625).toFixed(2)}</div>
					<div>Total: {pendingTotal}</div>
				</div>
			</div>
			<div className='ticket-btn-box'>
				<button>Dine In</button>
				<button>To Go</button>
				<button
					className='confirm-btn'
					onClick={() => {
						submitTicket();
					}}
				>
					Pay
				</button>
			</div>
		</div>
	);
}
