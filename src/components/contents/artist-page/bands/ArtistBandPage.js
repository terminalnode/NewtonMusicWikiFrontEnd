import { Button, Typography } from '@material-ui/core';
import { useContext } from 'react';
import { DatabaseContext } from '../../../../DatabaseContext'
import { getBandArtistList } from '../../../../apis/artistActions';
import './ArtistBandPage.css';
import ArtistList from '../artist-list/ArtistList';

export default function ArtistBandPage() {
  const data = useContext(DatabaseContext);
  if (data.artistFetchType !== "BAND") {
    reloadArtists(data);
  }

  return (
    <div className="ArtistBandPage">
      <Typography variant="h1">
        Browse bands
      </Typography>

      <div className="PageTop">
        <Button
          variant="outlined"
          color="primary"
          onClick={ () => reloadArtists(data) }>
            Refresh
        </Button>
      </div>

      <div className="PageBottom">
        <ArtistList artists={ data.artistList } />
      </div>
    </div>
  );
}

function reloadArtists(data) {
  getBandArtistList(data);
}