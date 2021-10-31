import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

import TaskList from './TaskList';
import WorkPeriod from './WorkPeriod';

const useStyles = makeStyles((theme) => ({
	jobTitle: {
		fontSize: 24,
		padding: theme.spacing(1)
	},
	paper: {
		borderRadius: 3,
		margin: theme.spacing(2)
	}
}));

const Job = (props) => {
	const { job } = props;

	const classes = useStyles();

	return (
		<React.Fragment>
			<Typography variant="h4" color="primary" className={classes.jobTitle}>
				{job.roleTitle}
			</Typography>
			<WorkPeriod terms={job.workPeriod} />
			<TaskList tasks={job.tasks} />
		</React.Fragment>
	);
};

Job.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types, react/require-default-props
	job: PropTypes.object
};

export default Job;
