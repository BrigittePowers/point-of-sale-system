// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
	// get a single user by either their id or their username
	async getSingleUser({ user = null, params }, res) {
		const foundUser = await User.findOne({
			$or: [{ _id: user ? user._id : params.id }, { name: params.name }],
		});

		if (!foundUser) {
			return res
				.status(400)
				.json({ message: 'Cannot find a user with this id!' });
		}

		res.json(foundUser);
	},
	// login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
	// {body} is destructured req.body
	async login({ body }, res) {
		const user = await User.findOne({
			name: body.name,
		});
		if (!user) {
			return res.status(400).json({ message: "Can't find this user" });
		}

		const correctPw = await user.isCorrectPassword(body.password);

		if (!correctPw) {
			return res.status(400).json({ message: 'Wrong password!' });
		}
		const token = signToken(user);
		res.json({ token, user });
	},
};
