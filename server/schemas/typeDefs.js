const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Item {
		_id: ID
		name: String
		acronym: String
		price: Float
		type: String
		options: [Option]
		defaults: [String]
	}

	type Option {
		_id: ID
		name: String
		type: String
		adjust: Float
		category: [String]
		added: Boolean
	}

	type User {
		_id: ID
		name: String
		password: Int
		savedOrders: [Order]
	}

	type Order {
		_id: ID
		purchaseDate: String
		name: String
		items: [Item]
		paymentType: String
		total: Float
	}

	input savedOrder {
		_id: ID
		purchaseDate: String
		name: String
		items: [String]
		paymentType: String
		total: Float
	}

	type Query {
		me: User
		items: [Item]
		item(_id: ID): Item
		options: [Option]
		order(_id: ID): Order
		orders: [Order]
	}

	type Mutation {
		login(email: String!, password: String!): Auth
		saveOrder(input: savedOrder!): User
	}

	type Auth {
		token: ID!
		user: User
	}
`;

module.exports = typeDefs;
