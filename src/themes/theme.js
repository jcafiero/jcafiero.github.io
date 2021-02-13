import { createMuiTheme } from '@material-ui/core/styles';
import merge from 'lodash/merge';

import _DarkTheme from './_DarkTheme';

export const defaultConfig = merge(
  {},
  {
    palette: {
      primary: {
        light: '#b085f5',
        main: '#7e57c2',
        dark: '#4d2c91',
        contrastText: '#fff',
      },
      secondary: {
        light: '#7953d2',
        main: '#4527a0',
        dark: '#000070',
        contrastText: '#fff',
      },
      type: 'light',
      background: {
        default: '#fafafa'
      }
    },
    typography: {
      fontFamily: '"Roboto Slab", "Helvetica Neue", Helvetica, Arial, sans-serif',
      h1: {
        // fontFamily: 'Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif',
        fontSize: '4rem'
      },
      h2: {
        fontSize: '3.25rem'
      }
    },
    overrides: {
      MuiLink: {
        root: {
          fontFamily: '"Roboto Slab", "Helvetica Neue", Helvetica, Arial, sans-serif',
          '&:hover': {
            color: 'white'
          }
        }
      }
    }
  }
);

export const lightConfig = defaultConfig;
export const darkConfig = merge({}, defaultConfig, _DarkTheme);

export const lightTheme = createMuiTheme(lightConfig);
export const darkTheme = createMuiTheme(darkConfig);

export default lightTheme;

