const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Item, Option, Ticket, Order } = require('../models');

const resolvers = {
	Query: {
		//get a user by username
		users: async () => {
			return User.find();
		},
		user: async (parent, { userId }) => {
			return User.findOne({ _id: userId });
		},
		// me: async (parent, args, context) => {
		// 	if (context.user) {
		// 		return User.findOne({ _id: context.user._id });
		// 	}
		// 	throw new AuthenticationError('You need to be logged in!');
		// },
		item: async ({ _id }) => {
			return await Item.findById(_id);
		},
		items: async () => {
			return await Item.find({});
		},
		options: async () => {
			return await Option.find({});
		},
		order: async ({ _id }) => {
			return await Order.findById(_id);
		},
		orders: async () => {
			return await Order.find({});
		},
		ticket: async (_id) => {
			return await Ticket.findById(_id);
		},
		tickets: async () => {
			return await Ticket.find({});
		},
	},
	Mutation: {
		login: async (parent, { pin }) => {
			const users = await User.find({});

			users.forEach((user) => {
				const correctPin = user.isCorrectPin(pin);

				if (correctPin) {
					console.log('Correct');
					const token = signToken(user);
					return { token, user };
				} else {
					throw new AuthenticationError('Incorrect password!');
				}
			});
		},
		addOrder: async (parent, { orderedItem, orderedMods }) => {
			return await Order.create({
				orderedItem,
				orderedMods,
			});
		},
		addTicket: async (parent, { date, name, paymentType, total }) => {
			return await Ticket.create({ date, name, paymentType, total });
		},
	},
};

module.exports = resolvers;
