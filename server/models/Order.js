const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
	purchaeDate: {
		type: Date,
		default: Date.now,
	},
	name: {
		type: String,
		required: true,
		unique: true,
	},
	items: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Item',
		},
	],
	paymentType: {
		type: String,
	},
	total: {
		type: Number,
	},
	tip: {
		type: Number,
	},
});

const Order = model('Order', orderSchema);

module.exports = Order;
