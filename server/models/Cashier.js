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
	order: [Order.schema],
});

// set up pre-save middleware to create password
cashierSchema.pre('save', async function (next) {
	if (this.isNew || this.isModified('password')) {
		const saltRounds = 10;
		this.password = await bcrypt.hash(this.password, saltRounds);
	}

	next();
});

// compare the incoming password with the hashed password
cashierSchema.methods.isCorrectPassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

const Cashier = model('Cashier', cashierSchema);

module.exports = Cashier;
