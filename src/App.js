import React from 'react';

import { LightDarkThemeProvider as ThemeProvider } from './components/LightDarkThemeProvider';
import ErrorNotFound from './components/ErrorNotFound';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutContainer from './components/About/AboutContainer';
import HomeContainer from './components/HomeContainer';
import ResumeContainer from './components/Resume/ResumeContainer';
import HobbiesContainer from './components/Hobbies/HobbiesContainer';
import { makeStyles } from '@material-ui/core/styles';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const useStyles = makeStyles(() => ({
	pageContainer: {
		// 394px is calculated from 64px + 74px + 240px (Navbar + Header + Footer heights)
		minHeight: 'calc(100vh - 394px)'
	}
}))

const App = () => {
	const classes = useStyles();
	return (
		<ThemeProvider>
			<Router>
				
				<Navbar />
				<Header />
				<Grid container justify="center" className={classes.pageContainer}>
					<Grid item xs={12} md={8}>
						<Switch>
							<Route path="/" exact component={HomeContainer} />
							<Route path="/about/" component={AboutContainer} />
							<Route path="/work/" component={ResumeContainer} />
							<Route path="/hobbies/" component={HobbiesContainer} />
							<Route path="/404" component={ErrorNotFound} />
						</Switch>
						</Grid>
				</Grid>
				<Footer />
			</Router>
			</ThemeProvider>
		);
}

export default App;
