import { gql } from '@apollo/client';

export const LOGIN = gql`
	mutation login($password: String!) {
		login(email: $email, password: $password) {
			token
			cashier {
				_id
			}
		}
	}
`;

export const ADD_ORDER = gql`
	mutation addOrder($items: [ID]!) {
		addOrder(items: $items) {
			purchaseDate
			items {
				_id
				name
				description
				price
				quantity
				category {
					name
				}
			}
		}
	}
`;
