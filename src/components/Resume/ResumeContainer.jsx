import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import ErrorNotFound from '../ErrorNotFound';
import CareerTimeline from './Career/CareerTimeline';
import EducationHistory from './Education/EducationHistory';
import SkillsList from './Skills/SkillsList';

const FullResume = () => (
	<React.Fragment>
		<CareerTimeline />
		<SkillsList />
		<EducationHistory />
	</React.Fragment>
);

const ResumeContainer = () => (
	<Grid>
		<Switch>
			<Route path="/work/" exact component={FullResume} />
			<Route path="/work/career" exact component={CareerTimeline} />
			<Route path="/work/skills" exact component={SkillsList} />
			<Route path="/work/education" component={EducationHistory} />
			<Route component={ErrorNotFound} />
		</Switch>
	</Grid>
);

export default ResumeContainer;
