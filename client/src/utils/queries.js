import { gql } from '@apollo/client';

export const QUERY_ITEMS = gql`
	{
		items {
			_id
			name
			acronym
			price
			type
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
