import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LightDarkThemeProvider as ThemeProvider } from './components/LightDarkThemeProvider';
import ErrorNotFound from './components/ErrorNotFound';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import AboutContainer from './components/About/AboutContainer';
import HomeContainer from './components/Home/HomeContainer';
import ResumeContainer from './components/Resume/ResumeContainer';
import HobbiesContainer from './components/Hobbies/HobbiesContainer';

const useStyles = makeStyles((theme) => ({
	pageContainer: {
		// 458px is calculated from 64px + 74px + 64px + 240px (Navbar + Header + Header margin + Footer heights)
		minHeight: 'calc(100vh - 458px)',
		marginBottom: theme.spacing(2)
	}
}));

const App = () => {
	const classes = useStyles();
	return (
		<ThemeProvider>
			<Router>
				<Navbar />
				<Header />
				<Grid container role="main" className={classes.pageContainer}>
					{/* <Grid item xs={12} md={8}> */}
						<ScrollToTop />
						<Switch>
							<Route path="/" exact component={HomeContainer} />
							<Route path="/about/" component={AboutContainer} />
							<Route path="/work/" component={ResumeContainer} />
							<Route path="/hobbies/" component={HobbiesContainer} />
							<Route path="/404" component={ErrorNotFound} />
						</Switch>
					{/* </Grid> */}
				</Grid>
				<Footer />
			</Router>
		</ThemeProvider>
	);
};

export default App;
