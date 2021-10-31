import React from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

import education from '../../../data/education';

const useStyles = makeStyles((theme) => ({
	educationContainer: {
		margin: '0 -8px',
		padding: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
	},
	degree: {
		padding: `${theme.spacing(0.5)}px 0`
	},
	graduation: {
		paddingLeft: theme.spacing(1.5)
	},
	headerContainer: {
		margin: '0 auto'
	},
	location: {
		color: theme.palette.text.primary,
		fontSize: 18,
		paddingLeft: theme.spacing(1.5)
	},
	pageHeader: {
		textAlign: 'center',
		margin: '0 auto',
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
	resumeContainer: {
		margin: theme.spacing(2)
	},
	schoolName: {
		alignItems: 'center',
		display: 'inline-flex',
		fontSize: 24,
		// padding: `theme.spacing(2)`
	},
	schoolPaper: {
		padding: theme.spacing(2)
	}
}));

const EducationHistory = () => {
	const classes = useStyles();
	return (
		<Box className={classes.resumeContainer}>
			<Box className={classes.headerContainer}>
				<Typography variant="h2" className={classes.pageHeader}>
					<Link component={RouterLink} to="/work/education" target="_self">
						Education
					</Link>
				</Typography>
			</Box>
			<Grid container direction="row" spacing={2} className={classes.educationContainer}>
				{education.map((school) => (
					<Grid item xs={12} key={school.name}>
						<Paper className={classes.schoolPaper} elevation={3}>
							<Typography variant="h3" color="primary" className={classes.schoolName}>
								{school.name}
								<span className={classes.location}>{school.location}</span>
							</Typography>
							<Typography variant="body1" className={classes.degree}>
								{school.degree}
								<span className={classes.graduation}>{school.graduation}</span>
							</Typography>
							{school.coursework.map((course, index) => {
								const separator = ',\u00A0';
								if (index < school.coursework.length - 1) {
									return (
										<Typography variant="body2" display="inline" key={index}>
											{course}
											{separator}
										</Typography>
									);
								}
								return <Typography variant="body2" display="inline" key={index}>{course}</Typography>;
							})}
						</Paper>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default EducationHistory;
