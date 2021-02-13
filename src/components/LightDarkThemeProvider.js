import React, { useEffect, useState } from 'react';

import { currentTheme, THEME_CHANGE_EVENT, DEFAULT_THEME } from '../themes/themeUtils';
import { lightTheme, darkTheme } from '../themes/theme';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


const LightDarkThemeProvider = (props) => {
  const { children, component: Component, defaultVariant, themes } = props;

  const [variant, setVariant] = useState(currentTheme(defaultVariant));
  const getTheme = (variant) => themes[variant] || themes[defaultVariant];

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
  )

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