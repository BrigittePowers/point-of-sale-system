import { gql } from '@apollo/client';

export const GET_ME = gql`
	{
		me {
			_id
			name
		}
	}
`;

export const QUERY_USERS = gql`
	query users {
		users {
			_id
			name
		}
	}
`;

export const QUERY_SINGLE_USER = gql`
	query user($userId: ID!) {
		profile(userId: $userId) {
			_id
			name
		}
	}
`;

export const QUERY_ITEMS = gql`
	{
		items {
			_id
			name
			acronym
			price
			type
			defaults
			options {
				_id
				name
				type
				adjust
				category
			}
		}
	}
`;

export const QUERY_TICKETS = gql`
	{
		tickets {
			_id
			date
			name
			orders {
				_id
				orderedItem
				orderedMods
			}
			paymentType
			total
		}
	}
`;
