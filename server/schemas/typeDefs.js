const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Item {
		__id: ID
		name: String
		acronym: String
		defaults: [String]!
		modifiers: [String]!
		price: Integer
	}

	type Cashier {
		__id: ID
		name: String
		password: Number
	}

	type Query {
		cashiers: [Cashier]
		items: [Item]
	}
`;

module.exports = typeDefs;
