const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type Item {
		_id: ID
		name: String
		acronym: String
		price: Float
		type: String
		options: [Option]
	}

	type Option {
		_id: ID
		name: String
		type: String
		adjust: Float
		category: [String]
	}

	type Query {
		items: [Item]
		options: [Option]
	}
`;

module.exports = typeDefs;
