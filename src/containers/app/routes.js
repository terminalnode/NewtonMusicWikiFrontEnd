import { Route } from "react-router-dom";
import HomePage from '../../components/contents/home-page/HomePage'
import ArtistsPage from '../../components/contents/artist-page/all/ArtistAllPage';
import ArtistBandPage from '../../components/contents/artist-page/bands/ArtistBandPage';
import ArtistPeoplePage from '../../components/contents/artist-page/people/ArtistPeoplePage';
import AlbumPage from '../../components/contents/album-page/AlbumPage';
import SongPage from '../../components/contents/song-page/SongPage';
import ArtistDisplay from "../../components/contents/artist-page/artist-display/ArtistDisplay";
import AlbumDisplay from "../../components/contents/album-page/album-display/AlbumDisplay";
import SongDisplay from "../../components/contents/song-page/song-display/SongDisplay";

export const routes = [
  <Route path="/artists/all">
    <ArtistsPage />
  </Route>,

  <Route path="/artists/people">
    <ArtistPeoplePage />
  </Route>,

  <Route path="/artists/bands">
    <ArtistBandPage />
  </Route>,

  <Route path="/artists/:id">
    <ArtistDisplay />
  </Route>,

  <Route path="/albums/:id">
    <AlbumDisplay />
  </Route>,

  <Route path="/albums">
    <AlbumPage />
  </Route>,

  <Route path="/songs/:id">
    <SongDisplay />
  </Route>,

  <Route path="/songs">
    <SongPage />
  </Route>,

// The switch will match the first route it hits, therefor this needs to be last
  <Route path="/">
      <HomePage />
  </Route>,
];