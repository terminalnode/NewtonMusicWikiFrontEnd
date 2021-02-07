import './App.css';
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import { themeNewton } from './themeNewton';
import NewtonAppBar from '../../components/navigation/NewtonAppBar';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { routes } from './routes';

function App() {
  console.log("Loaded up and ready!");

  return (
    <ThemeProvider theme={themeNewton}>
      <Router>
        <CssBaseline />
        <NewtonAppBar />

        <Container>
          <Switch>
            { routes }
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;