import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorNotFound from '../ErrorNotFound';
import HobbiesList from './HobbiesList';

import Grid from '@material-ui/core/Grid';


const HobbiesContainer = () => {
	return (
		<Grid>
			<Switch>
				<Route path="/hobbies/" exact component={HobbiesList} />
				<Route component={ErrorNotFound} />
			</Switch>
		</Grid>
	)
}

export default HobbiesContainer;
