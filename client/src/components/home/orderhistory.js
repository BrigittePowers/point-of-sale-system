import React from 'react';

export default function OrderHistory({ tickets }) {
	return (
		<div className='recall-list'>
			{tickets.map((ticket) => (
				<div className='recall-item' key={ticket._id}>
					<div className='ticket-time'>{ticket.date}</div>
					<div className='ticket-name'>{ticket.name}</div>
					{ticket.orders.map((order) => (
						<div key={order._id}>
							<div>{order.orderedItem}</div>
							{order.orderedMods.map((mod, idx) => (
								<div key={idx}>{mod}</div>
							))}
						</div>
					))}
					<div className='pay'>{ticket.paymentType}</div>
					<div>${ticket.total}</div>
				</div>
			))}
		</div>
	);
}
