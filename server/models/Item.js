const { Schema, model } = require('mongoose');
const Option = require('./Option');

const itemSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	acronym: {
		type: String,
		required: true,
		trim: true,
	},
	price: {
		type: Number,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	options: [Option.schema],
});

const Item = model('Item', itemSchema);

module.exports = Item;
