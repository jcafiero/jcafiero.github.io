import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { darken, lighten, makeStyles } from '@material-ui/core/styles';
import {
	GitHub, Instagram, LinkedIn, Mail
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	footerContainer: {
		backgroundColor: theme.palette.type === 'light' ? lighten(theme.palette.primary.light, 0.85) : darken(theme.palette.primary.dark, 0.45),
		minHeight: 240,
	},
	footerItem: {
		margin: '0 auto',
		padding: 80,
		textAlign: 'center'
	},
	socialLinks: {
		paddingBottom: 10
	}
}));

const SocialLinks = () => {
	const classes = useStyles();
	return (
		<Grid item className={classes.socialLinks}>
			<IconButton color="primary" aria-label="My Github account" href="https://github.com/jcafiero"><GitHub /></IconButton>
			<IconButton color="primary" aria-label="My LinkedIn profile" href="https://linkedin.com/in/jcafiero2/"><LinkedIn /></IconButton>
			<IconButton color="primary" aria-label="My Instagram profile" href="https://instagram.com/howdyitsjenn"><Instagram /></IconButton>
			<IconButton color="primary" aria-label="Send me an email at jcafiero2@gmail.com" href="mailto:jcafiero2@gmail.com"><Mail /></IconButton>
		</Grid>
	);
};

const Footer = () => {
	const classes = useStyles();
	return (
		<Grid role="contentinfo" container className={classes.footerContainer}>
			<Grid item xs={9} className={classes.footerItem}>
				<SocialLinks />
				<Typography variant="body2">&copy; Jennifer Cafiero 2020 - 2021. All rights reserved.</Typography>
			</Grid>
		</Grid>
	);
};

export default Footer;
