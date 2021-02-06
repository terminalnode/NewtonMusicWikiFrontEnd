import './App.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Logo from '../../components/logo/Logo';
import ContentDisplay from '../content-display/ContentDisplay';
import { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
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
      <div className="AppGrid">
        <Logo />
        <Sidebar setContentNameFunction={setContentName} />
        <ContentDisplay
          contentName={contentName}
          artistList={{ get: artistList, set: setArtistList }}
          albumList={{ get: albumList, set: setAlbumList }}
          songList={{get: songList, set: setSongList}}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;