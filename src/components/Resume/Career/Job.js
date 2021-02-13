import React from 'react';

import TaskList from './TaskList';
import WorkPeriod from './WorkPeriod';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

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
	const { job, ...other } = props;

	const classes = useStyles();

	return (
		<Paper elevation={3} className={classes.paper} {...other}>
			<Typography variant="h4" color="primary" className={classes.jobTitle}>
				{job.roleTitle}
			</Typography>
			<WorkPeriod terms={job.workPeriod} />
			<TaskList tasks={job.tasks} />
		</Paper>
	)
};

export default Job;
