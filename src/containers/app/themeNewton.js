import { createMuiTheme } from '@material-ui/core/styles';
import { amber, deepPurple, orange } from '@material-ui/core/colors';

export const themeNewton = createMuiTheme({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  palette: {
    background: {
      paper: '#333',
      default: "#222"
    },
    primary: {
      main: orange[500],
      contrastText: deepPurple[900],
      background: deepPurple[500],
    },
    secondary: {
      main: amber[500],
      contrastText: deepPurple[900],
      background: deepPurple[500],
    },
    text: {
      primary: amber[500],
      secondary: deepPurple[500],
    }
  },
  typography: {
    h1: {
      fontSize: '2.5rem'
    },
  },
});