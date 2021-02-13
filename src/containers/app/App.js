import './App.css';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { themeNewton } from './themeNewton';
import NewtonAppBar from '../../components/navigation/NewtonAppBar';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { routes } from './routes';
import { useContext } from 'react';
import { DatabaseContext } from '../../DatabaseContext';

function App() {
  console.log("Loaded up and ready!");
  const data = useContext(DatabaseContext);

  return (
    <ThemeProvider theme={themeNewton}>
      <Router>
        <CssBaseline />
        <NewtonAppBar
          title={ data.pageTitle }
        >
          <Switch>
            { routes }
          </Switch>
        </NewtonAppBar>
      </Router>
    </ThemeProvider>
  );
}

export default App;