const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
	purchaseDate: {
		type: Date,
		default: Date.now,
	},
	name: {
		type: String,
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
});

const Order = model('Order', orderSchema);

module.exports = Order;
