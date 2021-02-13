import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import { currentTheme, setTheme } from '../themes/themeUtils';

const useStyles = makeStyles((theme) => ({
	buttonList: {
		flexGrow: 1
	},
	homeButton: {
		color: theme.palette.primary.contrastText,
		// fontFamily: '"Kaushan Script","Helvetica Neue",Helvetica,Arial,cursive',
		marginRight: theme.spacing(2)
	},
	link: {
		color: 'inherit',
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
		display: 'flex',
		alignItems: 'center'
	},
	linkContainer: {
		float: 'right',
		display: 'flex',
		flexDirection: 'row'
	},
	themeToggle: {
		textTransform: 'none'
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between'
	}
}));

const HideOnScroll = (props) => {
	const { children } = props;
	const trigger = useScrollTrigger();
	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	)
}

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired
};

const Navbar = (props) => {
	const classes = useStyles();

	const [themeMode, setThemeMode] = React.useState(currentTheme());

	const changeTheme = () => () => {
		if (themeMode === 'light') {
			setThemeMode('dark');
			setTheme('dark');
		} else {
			setThemeMode('light');
			setTheme('light');
		}
 };

	return (
		<React.Fragment>
			<HideOnScroll {...props}>
				<AppBar>
					<Toolbar className={classes.toolbar}>
						<Link component={RouterLink} to="/" className={classes.homeButton}>Jennifer Cafiero</Link>
						<Box className={classes.linkContainer}>
							<Link component={RouterLink} to="/about" className={classes.link} target="_self">
								About Me
							</Link>
							<Link component={RouterLink} to="/work" className={classes.link} target="_self">
								Resume
							</Link>
							<Link component={RouterLink} to="/hobbies" className={classes.link} target="_self">
								Hobbies
							</Link>
							<Button variant="outlined" color="inherit" onClick={changeTheme()} className={classes.themeToggle}>
								{themeMode === 'light' ? "View in Dark Theme" : "View in Light Theme"}
							</Button>
						</Box>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</React.Fragment>
	);
};

export default Navbar;
