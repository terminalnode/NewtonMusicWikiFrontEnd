import {
    Switch,
    Route,
  } from "react-router-dom";
import HomePage from '../../components/contents/home-page/HomePage'
import ArtistsPage from '../../components/contents/artist-page/all/ArtistAllPage';
import ArtistBandPage from '../../components/contents/artist-page/bands/ArtistBandPage';
import ArtistPeoplePage from '../../components/contents/artist-page/people/ArtistPeoplePage';
import AlbumPage from '../../components/contents/album-page/AlbumPage';
import SongPage from '../../components/contents/song-page/SongPage';

export default function NewtonSwitch() { 
  return (
    <Switch>
      <Route path="/">
          <HomePage />
      </Route>

      <Route path="/artists">
        <ArtistsPage />
      </Route>

      <Route path="/artists/people">
        <ArtistPeoplePage />
      </Route>

      <Route path="/artists/bands">
        <ArtistBandPage />
      </Route>

      <Route path="/albums">
        <AlbumPage />
      </Route>

      <Route path="/songs">
        <SongPage />
      </Route>
    </Switch>
  );
};