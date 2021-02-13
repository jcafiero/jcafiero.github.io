import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorNotFound from '../ErrorNotFound';
import CareerTimeline from './Career/CareerTimeline';
import EducationHistory from './Education/EducationHistory';
import SkillsList from './Skills/SkillsList';

import Grid from '@material-ui/core/Grid';

const FullResume = () => {
	return (
		<React.Fragment>
			<EducationHistory />
			<CareerTimeline />
			<SkillsList />
		</React.Fragment>
	)
};

const ResumeContainer = () => {
	return (
		<Grid>
			<Switch>
				<Route path="/work/" exact component={FullResume} />
				<Route path="/work/education" component={EducationHistory} />
				<Route path="/work/career" exact component={CareerTimeline} />
				<Route path="/work/skills" exact component={SkillsList} />
				<Route component={ErrorNotFound} />
			</Switch>
		</Grid>
	)
}

export default ResumeContainer;
