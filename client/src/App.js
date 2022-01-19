import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

//import pages
import Home from './pages/Home';
import Login from './pages/Login';
//import components

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
	request: (operation) => {
		const token = localStorage.getItem('id_token');

		operation.setContext({
			headers: {
				authorization: token ? `Bearer ${token}` : '',
			},
		});
	},
	uri: '/graphql',
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<>
					<Switch>
						<Redirect exact from='/' to='/login' />
						<Route exact path='/login' component={Login} />
						<Route exact path='/home' component={Home} />
						<Route
							render={() => (
								<h1 className='display-2'>Wrong page!</h1>
							)}
						/>
					</Switch>
				</>
			</Router>
		</ApolloProvider>
	);
}

export default App;
