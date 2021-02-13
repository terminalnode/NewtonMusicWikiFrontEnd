import { createMuiTheme } from '@material-ui/core/styles';
import { amber, deepPurple, orange } from '@material-ui/core/colors';

export const themeNewton = createMuiTheme({
  palette: {
    background: {
      paper: '#223',
      default: "#112",
    },
    primary: {
      main: orange[500],
    },
    secondary: {
      main: amber[500],
    },
    text: {
      primary: amber[500],
      secondary: deepPurple[500],
    }
  },
  typography: {
    body2: {
      fontSize: '1rem',
    },
    h1: {
      fontSize: '2.5rem',
    },
  },
});