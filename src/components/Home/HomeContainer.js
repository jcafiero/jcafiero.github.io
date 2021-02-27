import React from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { DoubleArrowOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

import ContactPanel from './ContactPanel';

import { Link as RouterLink } from 'react-router-dom';

// import Typewriter from 'typewriter-effect';

const useStyles = makeStyles((theme) => ({
	homeContainer: {
		scrollBehavior: 'smooth'
	},
	homeTile: {
		height: 'calc(100vh - 200px)',
		maxHeight: 'calc(100vh - 200px)',
		padding: theme.spacing(6),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-around'
	},
	resumeTile: {
		backgroundColor: fade(theme.palette.primary.main, 0.1),
		justifyContent: 'space-evenly'
	},
	seeMoreButton: {
		alignSelf: 'center'
	},
	seeMoreIcon: {
		transition: theme.transitions.create(["transform"], {
			duration: theme.transitions.duration.short
		}),
		transform: "rotate(90deg)"
	},
	welcomeTile: {
		
	}

//   '@keyframes bounce': {
//     '0%': {
//       transform: 'scale(1,1)',
//       translateY: 0
//     },
//     '10%': {
//       transform: 'scale(1.1,0.9)',
//       translateY: 0
//     },
//     '30%': {
//       transform: 'scale(0.9,1.1)',
//       translateY: -100
//     },
//     '50%': {
//       transform: 'scale(1.05,0.95)',
//       translateY: 0
//     },
//     '57%': {
//       transform: 'scale(1,1)',
//       translateY: -7
//     },
//     '64%': {
//       transform: 'scale(1,1)',
//       translateY: 0
//     },
//     '100%': {
//       transform: 'scale(1,1)',
//       translateY: 0
//     }
//   },
//   bounce: {
//     '&:hover': {
//       color: 'red',
//       animationDuration: '1s',
//       animationName: 'bounce',
//       animationIterationCount:'infinite',
//       transformOrigin: 'bottom',
//       animationTimingFunction: 'cubic-bezier(0.280, 0.840, 0.420, 1)',
//     }
//   },
	
}));

const HomeContainer = (props) => {
	const classes = useStyles();
	const myRef = React.useRef(null);

	const handleScrollToContent = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
	return (
		<Box className={classes.homeContainer}>
			<Grid container className={clsx(classes.homeTile, classes.welcomeTile)}>
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
				<Typography variant="h3">
					Hi, I'm Jenn. Welcome!
				</Typography>
				<Typography variant="body1" color="primary">
					This is a website I built to demonstrate my professional and personal interests.
				</Typography>
				<IconButton onClick={handleScrollToContent} aria-label="See more info" color="primary" className={classes.seeMoreButton}>
					<DoubleArrowOutlined className={classes.seeMoreIcon} />
				</IconButton>
			</Grid>
			<Grid container className={clsx(classes.homeTile, classes.resumeTile)}>
				<Typography variant="h2" ref={myRef}>
					Check out my resume!
				</Typography>
				<Button variant="contained" color="primary" component={RouterLink} to="/work/#">
					Go to resume
				</Button>
			</Grid>
			{/* <ContactPanel /> */}
		</Box>
	)
};

export default HomeContainer;