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
