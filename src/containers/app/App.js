import './App.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Logo from '../../components/logo/Logo';
import ContentDisplay from '../content-display/ContentDisplay';
import { useState } from 'react';

function App() {
  const [ contentName, setContentName ] = useState("home")
  const [ artistList, setArtistList ] = useState(null)
  const [ albumList, setAlbumList ] = useState(null)

  return (
    <div className="AppGrid">
      <Logo />
      <Sidebar setContentNameFunction={setContentName} />
      <ContentDisplay
        contentName={contentName}
        artistList={{ get: artistList, set: setArtistList }}
        albumList={{ get: albumList, set: setAlbumList }}
      />
    </div>
  );
}

export default App;