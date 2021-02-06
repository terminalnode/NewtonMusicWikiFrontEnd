import './App.css';
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import { useState } from 'react';
import { themeNewton } from './themeNewton';
import NewtonAppBar from '../../components/navigation/NewtonAppBar';
import { BrowserRouter as Router } from "react-router-dom";
import NewtonSwitch from './NewtonSwitch';

function App() {
  console.log("Loaded up and ready!");
  const [ _, setContentName ] = useState("home")

  return (
    <ThemeProvider theme={themeNewton}>
      <Router>
        <CssBaseline />
        <NewtonAppBar />
        <Container>
          <NewtonSwitch />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;