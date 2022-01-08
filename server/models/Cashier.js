const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const serverSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	password: {},
});

const Cashier = model('Cashier', cashierSchema);

module.exports = Cashier;
