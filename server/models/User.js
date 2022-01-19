const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
	{
		name: {
			type: String,
		},
		pin: {
			type: String,
			required: true,
			length: 4,
		},
	},
	{
		toJSON: {
			virtuals: true,
		},
	},
);

// hash user password
userSchema.pre('save', async function (next) {
	if (this.isNew || this.isModified('pin')) {
		const saltRounds = 10;
		this.pin = await bcrypt.hash(this.pin, saltRounds);
	}

	next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPin = async function (pin) {
	return bcrypt.compare(pin, this.pin);
};

const User = model('User', userSchema);

module.exports = User;
