import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import AboutMe from './AboutMe';
import ErrorNotFound from '../ErrorNotFound';

const ResumeContainer = () => (
	<Grid>
		<Switch>
			<Route path="/about/" exact component={AboutMe} />
			<Route component={ErrorNotFound} />
		</Switch>
	</Grid>
);

export default ResumeContainer;
