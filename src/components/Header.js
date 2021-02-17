import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	hero: {
		textAlign: 'center',
		textTransform: 'uppercase',
		fontWeight: 600,
		fontFamily: 'Bogart,Recoleta,Helvetica Neue,Helvetica,Arial,sans-serif',
		margin: theme.spacing(4, 2)
	}
}));

const Header = () => {
	const classes = useStyles();
	return (
		<Typography role="heading" variant="h1" className={classes.hero}>Jennifer Cafiero</Typography>
	);
}

export default Header;
