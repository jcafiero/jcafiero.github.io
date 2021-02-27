import React from 'react';

import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Timeline from '@material-ui/lab/Timeline';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import { Company, MobileCompany } from './Company';

import career from '../../../data/career';

const useStyles = makeStyles((theme) => ({
	divider: {
		backgroundColor: theme.palette.secondary.main,
		height: 30,
		margin: '0 auto -6px',
		width: 2,
	},
	headerContainer: {
		margin: '0 auto',
	},
	mobileContainer: {
		margin: '0 auto',
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
	},
	pageHeader: {
		textAlign: 'center',
		'& .MuiLink-root': {
			color: theme.palette.text.primary,
			'&:hover': {
				color: theme.palette.primary.main
			}
		},
		'&:before, &:after': {
			backgroundColor: theme.palette.text.primary,
			content: '""',
			display: 'inline-block',
			height: 2,
			position: 'relative',
			verticalAlign: 'middle',
			width: '25%'
		},
		'&:before': {
			right: '0.5em',
			marginLeft: '-50%'
		},
		'&:after': {
			left: '0.5em',
			marginRight: '-50%'
		}
	},
	timelineContent: {
		margin: '0 auto',
	}
}));

const CareerTimeline = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Box className={classes.headerContainer}>
				<Typography variant="h2" className={classes.pageHeader}>
					<Link component={RouterLink} to="/work/career" target="_self">
						Career
					</Link>
				</Typography>
			</Box>
			<Hidden smDown>
				<Divider orientation="vertical" flexItem className={classes.divider} />
				<Timeline align="alternate" className={classes.timelineContent}>
					{career.slice(0).reverse().map(job => (
						<Company key={job.id} role={job} />
					))}
				</Timeline>
			</Hidden>
			<Hidden mdUp>
				<Grid container spacing={2} className={classes.mobileContainer}>
					{career.slice(0).reverse().map(job => (
						<Grid item xs={12} key={job.id}>
							<MobileCompany role={job} />
						</Grid>
					))}
				</Grid>
			</Hidden>
		</React.Fragment>
	);
};

export default CareerTimeline;