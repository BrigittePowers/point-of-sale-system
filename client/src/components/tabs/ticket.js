import React from 'react';

export default function ticket({ pendingTicket }) {
	console.log(pendingTicket);

	return (
		<div>
			{pendingTicket.map((order, idx) => (
				<div key={idx}>{order.name}</div>
			))}
		</div>
	);
}
