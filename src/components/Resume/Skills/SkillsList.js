import React from 'react';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

import skills from '../../../data/skills';

const useStyles = makeStyles((theme) => ({

	headerContainer: {
		margin: '0 auto'
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
	skillsContainer: {
		margin: '0 auto',
		width: '75%'
	},
	skillsList: {
		display: 'inline-flex'
	}
}));

const SkillsList = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Box className={classes.headerContainer}>
			<Typography variant="h2" className={classes.pageHeader}>
					<Link component={RouterLink} to="/work/skills" target="_self">
						Skills
					</Link>
				</Typography>
			</Box>
			<Box className={classes.skillsContainer}>
				{skills.map(skillGroup => (
					<div key={skillGroup.category}>
						<Typography component="h3" variant="h5">
							{skillGroup.category}
						</Typography>
						<div className={classes.skillsList}>
							{skillGroup.list.map((skill, index) => {
								const separator = ',\u00A0';
								if (index < skillGroup.list.length - 1 ) {
									return (
										<Typography key={skill} variant="body1">{skill}{separator}</Typography>
									)
								} else {
									return <Typography key={skill} variant="body1">{skill}</Typography>
								}
								})}
						</div>
					</div>
				))}
			</Box>
		</React.Fragment>
	);
};

export default SkillsList;
