const { Schema, model } = require('mongoose');

const menuSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	acronym: {
		type: String,
		required: false,
		unique: true,
		trim: true,
	},
	default: {},
	modifiers: {},
	price: {},
});

const Menu = model('Menu', menuSchema);

module.exports = Menu;
