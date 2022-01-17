const { Schema, model } = require('mongoose');
const Order = require('./Order');

const ticketSchema = new Schema({
	date: {
		type: String,
	},
	name: {
		type: String,
	},
	orders: [Order.schema],
	paymentType: {
		type: String,
	},
	total: {
		type: Number,
	},
});

const Ticket = model('Ticket', ticketSchema);

module.exports = Ticket;
