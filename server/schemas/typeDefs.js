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
		orderedItem: String
		orderedMods: [String]
	}

	input OrderInput {
		_id: ID
		orderedItem: String
		orderedMods: [String]
	}

	type Ticket {
		_id: ID
		date: Int
		name: String
		orders: [Order]
		paymentType: String
		total: Float
	}

	type Query {
		me: User
		item(_id: ID): Item
		items: [Item]
		options: [Option]
		order: Order
		orders: [Order]
		ticket(_id: ID): Ticket
		tickets: [Ticket]
	}

	type Mutation {
		login(email: String!, password: String!): Auth
		addOrder(input: OrderInput): Order
		addTicket(
			date: Int
			name: String
			orders: [OrderInput]
			paymentType: String
			total: Float
		): Ticket
	}

	type Auth {
		token: ID!
		user: User
	}
`;

module.exports = typeDefs;
