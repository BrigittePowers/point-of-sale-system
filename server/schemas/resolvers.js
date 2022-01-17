const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const { User, Item, Option, Ticket, Order } = require('../models');

const resolvers = {
	Query: {
		//get a user by username
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({}).select(
					'-__v -password',
				);

				return userData;
			}

			throw new AuthenticationError('Not logged in');
		},
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
