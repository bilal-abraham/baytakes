import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
	return (
		<Fragment>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Home} />
					{/* <Route exact path='/about' component={About} /> */}
					{/* <Route exact path='/links' component={Links} /> */}
					{/* <Route path='/' component={Error404} /> */}
				</Switch>
			</BrowserRouter>
		</Fragment>
	);
};

export default App;
