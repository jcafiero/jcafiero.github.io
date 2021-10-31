/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { currentTheme, THEME_CHANGE_EVENT, DEFAULT_THEME } from '../themes/themeUtils';
import { lightTheme, darkTheme } from '../themes/theme';

const LightDarkThemeProvider = (props) => {
	const {
		children, component: Component, defaultVariant, themes
	} = props;

	const [variant, setVariant] = useState(currentTheme(defaultVariant));
	const getTheme = (v) => themes[v] || themes[defaultVariant];

	useEffect(() => {
		const handleThemeChange = (event) => {
			setVariant(event.detail.theme);
		};
		document.addEventListener(THEME_CHANGE_EVENT, handleThemeChange, true);
		return () => document.removeEventListener(THEME_CHANGE_EVENT, handleThemeChange, true);
	}, []);

	return (
		<Component theme={getTheme(variant)}>
			<CssBaseline />
			{/* <Fonts /> */}
			{children}
		</Component>
	);
};

LightDarkThemeProvider.propTypes = {
	// eslint-disable-next-line react/require-default-props
	children: PropTypes.any,
	component: PropTypes.any,
	defaultVariant: PropTypes.any,
	themes: PropTypes.any
};

LightDarkThemeProvider.defaultProps = {
	component: ThemeProvider,
	defaultVariant: DEFAULT_THEME,
	themes: {
		light: lightTheme,
		dark: darkTheme
	}
};

export { LightDarkThemeProvider };

export default LightDarkThemeProvider;
