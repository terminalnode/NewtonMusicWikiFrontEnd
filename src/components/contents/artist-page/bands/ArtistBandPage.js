import { Typography } from '@material-ui/core';
import { useContext } from 'react';
import { DatabaseContext } from '../../../../DatabaseContext'
import { getArtistList } from '../../../../apis/artistActions';
import './ArtistBandPage.css';

export default function ArtistBandPage() {
  const data = useContext(DatabaseContext);
  if (data.artistList.length === 0) {
    reloadArtists(data);
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

function reloadArtists(data) {
  getArtistList(data);
}