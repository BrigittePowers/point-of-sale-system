const { Schema, model } = require('mongoose');

const optionSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
	adjust: {
		type: Number,
	},
	category: [
		{
			type: String,
			required: true,
		},
	],
	added: {
		type: Boolean,
	},
});

const Option = model('Option', optionSchema);

module.exports = Option;
