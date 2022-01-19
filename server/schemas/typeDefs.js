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
		pin: String
	}

	type Order {
		_id: ID
		orderedItem: String
		orderedMods: [String]
	}

	type Ticket {
		_id: ID
		date: String
		name: String
		orders: [Order]
		paymentType: String
		total: String
	}

	type Query {
		users: [User]
		user(userId: ID!): User
		item(_id: ID): Item
		items: [Item]
		options: [Option]
		order: Order
		orders: [Order]
		ticket(_id: ID): Ticket
		tickets: [Ticket]
	}

	type Mutation {
		login(pin: String!): Auth
		addOrder(orderedItem: String, orderedMods: String): Order
		addTicket(
			date: String
			name: String
			paymentType: String
			total: String
		): Ticket
	}

	type Auth {
		token: ID!
		user: User
	}
`;

module.exports = typeDefs;
