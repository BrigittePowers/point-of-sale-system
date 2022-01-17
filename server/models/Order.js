const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
	orderedItem: {
		type: String,
	},
	orderedMods: [
		{
			type: String,
		},
	],
});

const Order = model('Order', orderSchema);

module.exports = Order;
