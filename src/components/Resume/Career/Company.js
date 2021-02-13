import React from 'react';

import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Job from './Job';

const useStyles = makeStyles((theme) => ({
	timelineConnector: {
		backgroundColor: theme.palette.secondary.main,
	}
}));

const Company = (props) => {
	const { role } = props;
	const classes = useStyles();
	return (
		<TimelineItem>
			<TimelineOppositeContent>
				{role.roles.slice(0).reverse().map((job, index) => (
					<Job key={index} job={job} />
				))}
			</TimelineOppositeContent>
			<TimelineSeparator>
				<TimelineDot color="secondary" />
				<TimelineConnector className={classes.timelineConnector} />
			</TimelineSeparator>
			<TimelineContent>
				<Typography variant="h3" color="secondary">{role.companyName}</Typography>
			</TimelineContent>
			
		</TimelineItem>
	)
};

export default Company;