import gql from 'graphql-tag';

export const LOGIN_USER = gql`
	mutation loginUser($pin: String!) {
		login(pin: $pin) {
			token
			user {
				_id
				name
			}
		}
	}
`;

export const ADD_ORDER = gql`
	mutation addOrder($orderedItem: String!, $orderedMods: String!) {
		addOrder(orderedItem: $orderedItem, orderedMods: [$orderedMods])
	}
`;

export const ADD_TICKET = gql`
	mutation addTicket(
		$date: String!
		$name: String!
		$paymentType: String!
		$total: String!
	) {
		addTicket(
			date: $date
			name: $name
			paymentType: $paymentType
			total: $total
		) {
			_id
			date
			name
			paymentType
			total
		}
	}
`;
