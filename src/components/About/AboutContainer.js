import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AboutMe from './AboutMe';
import ErrorNotFound from '../ErrorNotFound';

import Grid from '@material-ui/core/Grid';

const ResumeContainer = () => {
	return (
		<Grid>
			<Switch>
				<Route path="/about/" exact component={AboutMe} />
				<Route component={ErrorNotFound} />
			</Switch>
		</Grid>
	)
}

export default ResumeContainer;
