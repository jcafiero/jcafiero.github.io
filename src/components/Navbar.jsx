import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';

import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { WbSunnyOutlined as SunIcon, Brightness2Outlined as MoonIcon } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import { currentTheme, setTheme } from '../themes/themeUtils';

import NavBarLogo from './Logos/NavBarLogo';

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
	navbarLogo: {
		width: 112,
		height: 56
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
	const { children, navbarScrollDirection } = props;
	const trigger = useScrollTrigger();
	if (navbarScrollDirection === 'up') {
		return (
			<Slide appear direction="down" in={trigger}>
				{children}
			</Slide>
		);
	}
	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
};

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	navbarScrollDirection: PropTypes.string
};

const Navbar = (props) => {
	const { ...other } = props;

	const [navbarScrollDirection, setNavbarScrollDirection] = React.useState('down');

	const location = useLocation();

	React.useEffect(() => {
		if (location.pathname.match(/^\/$/)) {
			setNavbarScrollDirection('up');
		} else {
			setNavbarScrollDirection('down');
		}
	}, [location]);

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
			<HideOnScroll navbarScrollDirection={navbarScrollDirection} {...other}>
				<AppBar>
					<Toolbar className={classes.toolbar}>
						<Link component={RouterLink} to="/" className={classes.homeButton}>
							<NavBarLogo fontSize="large" className={classes.navbarLogo} />
						</Link>
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
							<IconButton variant="outlined" color="inherit" onClick={changeTheme()} aria-label={themeMode === 'light' ? 'View page in dark theme' : 'View page in light theme'} className={classes.themeToggle}>
								{themeMode === 'light' ? <MoonIcon /> : <SunIcon />}
							</IconButton>
						</Box>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
		</React.Fragment>
	);
};

Navbar.propTypes = {};

export default Navbar;
