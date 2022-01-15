import gql from 'graphql-tag';

export const LOGIN_USER = gql`
	mutation loginUser($name: String!, $password: String!) {
		login(name: $name, password: $password) {
			token
			user {
				_id
			}
		}
	}
`;

export const SAVE_ORDER = gql`
	mutation saveOrder($input: savedOrder!) {
		saveBook(input: $input) {
			_id
			name
			savedOrder {
				# _id
				purchaseDate
				name
				items
				paymentType
				total
			}
		}
	}
`;
