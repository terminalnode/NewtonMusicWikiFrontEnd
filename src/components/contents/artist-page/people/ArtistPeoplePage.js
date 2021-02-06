import { Typography } from '@material-ui/core';
import { getArtistList } from '../../../../apis/artistActions';
import './ArtistPeoplePage.css';

function ArtistPeoplePage({artistList}) {
  // This isn't really working yet.
  if (artistList.get == null) {
    getArtistList(artistList);
  }

  return (
    <div className="ArtistPeoplePage">
      <Typography variant="h1">
        Browse individual artists
      </Typography>

      <p>There should be individual artists here</p>
    </div>
  );
}

export default ArtistPeoplePage;