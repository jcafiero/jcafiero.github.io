import React from 'react';

import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';

import Job from './Job';

const useStyles = makeStyles((theme) => ({
	mobileCompanyName: {
		textAlign: 'center'
	},
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
					<Paper elevation={3} className={classes.paper}><Job key={index} job={job} /></Paper>
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
	);
};

Company.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types, react/require-default-props
	role: PropTypes.object
};

const MobileCompany = (props) => {
	const { role } = props;
	const classes = useStyles();
	return (
		<Card>
			<Typography variant="h3" color="secondary" className={classes.mobileCompanyName}>{role.companyName}</Typography>
			{role.roles.slice(0).reverse().map((job, index) => (
				<Job key={index} job={job} />
			))}
		</Card>
	);
};

MobileCompany.propTypes = Company.propTypes;

export { Company, MobileCompany };

export default Company;
