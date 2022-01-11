const { Cashier, Order, Item, Category } = require('../models');

//TODO: finish cashiers and items

const resolvers = {
	Query: {
		categories: async () => {
			return await Category.find();
		},
		items: async (parent, { category, name, options }) => {
			if (category) {
				params.category = category;
			}

			if (name) {
				params.name = name;
			}

			if (options) {
				param.options = option;
			}

			return await Item.find(params).populate('category');
		},
		cashiers: async () => {
			return Cashier.find();
		},
		orders: async () => {
			return Order.find();
		},
		item: async (parent, { _id }) => {
			return await Item.findById(_id).populate('category');
		},
	},
};

module.exports = resolvers;
