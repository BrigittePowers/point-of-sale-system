import React from 'react';

export default function ticket({
	pendingTicket,
	pendingSubTotal,
	pendingTotal,
}) {
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
				<button className='confirm-btn'>Pay</button>
			</div>
		</div>
	);
}
