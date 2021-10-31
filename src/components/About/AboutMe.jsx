import React from 'react';

import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	aboutMeBio: {
		padding: 30,
		'& .MuiTypography-root': {
			paddingBottom: 5
		}
	},
	aboutMeContainer: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	aboutMePicture: {
		borderRadius: '50%',
		boxShadow: theme.shadows[4],
		display: 'flex',
		justifyContent: 'center',
		height: 300,
		width: 300,
	},
	link: {
		'&:hover': {
			color: theme.palette.primary.dark
		}
	}
}));

const AboutMe = () => {
	const classes = useStyles();
	return (
		<Grid container direction="row" className={classes.aboutMeContainer}>
			<Grid item xl={3} md={5} sm={12}>
				<img src="img/GradCap.jpg" alt="Portrait of me" className={classes.aboutMePicture} />
			</Grid>
			<Grid item xl={9} md={7} sm={12} className={classes.aboutMeBio}>
				<Typography variant="body1">Hi, I&apos;m Jenn.</Typography>
				<Typography variant="body1">I&apos;m a Software Engineer with an attention to detail.</Typography>
				<Typography variant="body1">I&apos;m passionate about building design system components that create clean &amp; consistent user interfaces.</Typography>
				<Typography variant="body1">Currently I&apos;m a Software Engineer on the Design System Engineering team at iCIMS.</Typography>
				<Typography variant="body1">
					In my free time, I love to cross stitch and crochet. You can check out some of what I&apos;ve made in my&nbsp;
					<Link component={RouterLink} to="/hobbies/" className={classes.link}>Hobbies page</Link>
					&nbsp;(coming soon).
				</Typography>
			</Grid>
		</Grid>
	);
};

export default AboutMe;
