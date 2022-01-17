import React from 'react';
// import { QUERY_TICKETS } from '../../utils/queries';


export default function OrderHistory({ tickets }) {
	

	return (
		<div>
			{tickets.map((ticket) => (
				<div key={ticket._id}>
					<div>{ticket.date}</div>
					<div>{ticket.name}</div>
					{ticket.orders.map((order) => (
						<div key={order._id}>
							<div>{order.orderedItem}</div>
							{order.orderedMods.map((mod, idx) => (
								<div key={idx}>{mod}</div>
							))}
						</div>
					))}
					<div>{ticket.paymentType}</div>
					<div>{ticket.total}</div>
				</div>
			))}
		</div>
	);
}
