import './ContentBody.css';
import HomePage from '../../../components/contents/home-page/HomePage'
import ArtistsPage from '../../../components/contents/artist-page/all/ArtistAllPage';
import ArtistBandPage from '../../../components/contents/artist-page/bands/ArtistBandPage';
import ArtistPeoplePage from '../../../components/contents/artist-page/people/ArtistPeoplePage';
import AlbumPage from '../../../components/contents/album-page/AlbumPage';
import SongPage from '../../../components/contents/song-page/SongPage';

function ContentBody({contentName, artistList, albumList, songList}) {
  let content;

  switch (contentName) {
    case "home": content = <HomePage />; break;
    case "artists": content = <ArtistsPage artistList={artistList} />; break;
    case "artists_people": content = <ArtistPeoplePage artistList={artistList} />; break;
    case "artists_bands": content = <ArtistBandPage artistList={artistList} />; break;
    case "songs": content = <SongPage songList={songList}/>; break;
    case "albums": content = <AlbumPage albumList={albumList} />; break;
    default: content = <HomePage />; break;
  }

  return (
    <div className="ContentBody">
      {/* TODO create a function for displaying content based on content name */}
      {content}
    </div>
  );
}

export default ContentBody;