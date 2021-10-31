import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import ErrorNotFound from '../ErrorNotFound';
import HobbiesList from './HobbiesList';

const HobbiesContainer = () => (
	<Grid>
		<Switch>
			<Route path="/hobbies/" exact component={HobbiesList} />
			<Route component={ErrorNotFound} />
		</Switch>
	</Grid>
);

export default HobbiesContainer;
