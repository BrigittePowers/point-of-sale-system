import { gql } from '@apollo/client';

export const QUERY_ITEMS = gql`
	{
		items {
			name
			acronym
			price
			type
			options {
				name
				type
				adjust
				category
			}
		}
	}
`;
