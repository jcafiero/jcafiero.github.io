import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	workPeriod: {
		fontSize: 16,
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2)
	}
}));

const WorkPeriod = (props) => {
	const { terms } = props;
	const classes = useStyles();
	return (
		terms.map((term, index) => {
			return (
				<Typography variant="h5" key={index} className={classes.workPeriod}>
					{term.startDate} - {term.endDate}
				</Typography>);
		})
	)
};

export default WorkPeriod;