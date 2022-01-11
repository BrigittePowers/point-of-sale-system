const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Order = require('./Order');

const cashierSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: Number,
		required: true,
		length: 4,
	},
	orders: [Order.schema],
});

const Cashier = model('Cashier', cashierSchema);

module.exports = Cashier;
