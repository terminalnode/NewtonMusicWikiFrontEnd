import './App.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Logo from '../../components/logo/Logo';
import ContentDisplay from '../content-display/ContentDisplay';
import { useState } from 'react';
import { CssBaseline, Grid, ThemeProvider } from '@material-ui/core';
import { themeNewton } from './themeNewton';

function App() {
  console.log("Loaded up and ready!");
  const [ contentName, setContentName ] = useState("home")
  const [ artistList, setArtistList ] = useState("test")
  const [ albumList, setAlbumList ] = useState("test")
  const [ songList, setSongList ] = useState("test")


  return (
    <ThemeProvider theme={themeNewton}>
      <CssBaseline />
      <Grid container>
        <Grid>
          <Logo />
          <Sidebar setContentNameFunction={setContentName} />
        </Grid>
        <ContentDisplay
          contentName={contentName}
          artistList={{ get: artistList, set: setArtistList }}
          albumList={{ get: albumList, set: setAlbumList }}
          songList={{get: songList, set: setSongList}}
        />
      </Grid>
    </ThemeProvider>
  );
}

export default App;