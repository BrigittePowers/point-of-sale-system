const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Order, Item, Option } = require('../models');

const resolvers = {
	Query: {
		//get a user by username
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({})
					.select('-__v -password')
					.populate('savedOrders');

				return userData;
			}

			throw new AuthenticationError('Not logged in');
		},
		items: async () => {
			return await Item.find({});
		},
		options: async () => {
			return await Option.find({});
		},
		orders: async () => {
			return await Order.find({});
		},
		item: async ({ _id }) => {
			return await Item.findById(_id);
		},
	},
	Mutation: {
		login: async (parent, { name, password }) => {
			const user = await User.findOne({ name });

			if (!user) {
				throw new AuthenticationError('Incorrect credentials');
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError('Incorrect credentials');
			}

			const token = signToken(user);
			return { token, user };
		},
		saveOrder: async (parent, args, context) => {
			if (context.user) {
				//   const savedBook = await Book.create({ ...args, username: context.user.username });

				const updatedUser = await User.findByIdAndUpdate(
					{ _id: context.user._id },
					{ $addToSet: { savedOrders: args.input } },
					{ new: true },
				);

				return updatedUser;
			}

			throw new AuthenticationError('You need to be logged in!');
		},
	},
};

module.exports = resolvers;
