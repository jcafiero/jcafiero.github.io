import React from 'react';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { DoubleArrowOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

import { Link as RouterLink } from 'react-router-dom';

import typewriterStyles from '../../themes/typewriter';

const useStyles = makeStyles((theme) => ({
	homeContainer: {
		scrollBehavior: 'smooth'
	},
	homeTile: {
		minHeight: 420,
		height: 'calc(100vh - 200px)',
		maxHeight: 'calc(100vh - 200px)',
		padding: `${theme.spacing(6)}px 0`,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-around'
	},
	resumeTile: {
		backgroundColor: fade(theme.palette.primary.main, 0.1),
		justifyContent: 'space-evenly',
		marginBottom: -theme.spacing(2)
	},
	seeMoreButton: {
		alignSelf: 'center'
	},
	seeMoreIcon: {
		transition: theme.transitions.create(['transform'], {
			duration: theme.transitions.duration.short
		}),
		transform: 'rotate(90deg)'
	},
	tagline: {
		alignSelf: 'center'
	},
	welcomeTile: {}
}));

const HomeContainer = () => {
	const classes = useStyles();
	const typewriterClasses = typewriterStyles();
	const myRef = React.useRef(null);

	const handleScrollToContent = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

	return (
		// eslint-disable-next-line react/jsx-fragments
		<React.Fragment>
			<Grid container justify="center" className={classes.homeContainer}>
				<Grid item md={8} sm={12} className={clsx(classes.homeTile, classes.welcomeTile)}>
					{/* TODO: add typewriter header */}
					{/* <Typewriter
						onInit={(typewriter) => {
							typewriter.typeString('<h2>Welcome!</h2>')
								.callFunction(() => {
									console.log('String typed out!');
								})
								.pauseFor(2500)
								.deleteAll()
								.start();
						}}
					/> */}
					<Typography variant="h3" className={typewriterClasses.typewriter}>
						Hi, I&apos;m Jenn. Welcome!
					</Typography>
					<Typography variant="body1" color="primary" className={classes.tagline}>
						This is a website I built to demonstrate my professional and personal interests.
					</Typography>
					<IconButton onClick={handleScrollToContent} aria-label="See more info" color="primary" className={classes.seeMoreButton}>
						<DoubleArrowOutlined className={classes.seeMoreIcon} />
					</IconButton>
				</Grid>
			</Grid>
			<Grid container justify="center" className={classes.resumeTile} ref={myRef}>
				<Grid item md={8} sm={12} className={clsx(classes.homeTile)}>
					<Typography variant="h2" >
						Check out my resume!
					</Typography>
					<Button variant="contained" color="primary" component={RouterLink} to="/work/#">
						Go to resume
					</Button>
				</Grid>
			</Grid>
			{/* <ContactPanel /> */}
		</React.Fragment>
	);
};

export default HomeContainer;
