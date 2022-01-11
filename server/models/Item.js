const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	acronym: {
		type: String,
		required: false,
		trim: true,
	},
	price: {
		type: Number,
		required: true,
		min: 0.25,
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category',
		require: true,
	},
});

const Item = model('Item', itemSchema);

module.exports = Item;
