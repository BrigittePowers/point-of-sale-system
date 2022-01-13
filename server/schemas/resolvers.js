const { Cashier, Order, Item, Option } = require('../models');

const resolvers = {
	Query: {
		items: async () => {
			return await Item.find({});
		},
		options: async () => {
			return await Option.find({});
		},
	},
};

module.exports = resolvers;
