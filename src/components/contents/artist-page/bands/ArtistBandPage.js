import { Typography } from '@material-ui/core';
import { getArtistList } from '../../../../apis/artistActions';
import './ArtistBandPage.css';

function ArtistBandPage({artistList}) {
  // This isn't really working yet.
  if (artistList.get == null) {
    getArtistList(artistList);
  }

  return (
    <div className="ArtistBandPage">
      <Typography variant="h1">
        Browse bands
      </Typography>

      <p>There should be bands here</p>
    </div>
  );
}

export default ArtistBandPage;