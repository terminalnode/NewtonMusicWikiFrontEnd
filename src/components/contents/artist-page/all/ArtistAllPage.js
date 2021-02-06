import { getArtistList } from '../../../../apis/artistActions';
import ArtistList from '../artist-list/ArtistList';
import './ArtistAllPage.css';
import { useContext } from 'react'
import { DatabaseContext } from '../../../../DatabaseContext'
import { Button, Typography } from '@material-ui/core';

export default function ArtistAllPage() {
  const data = useContext(DatabaseContext);
  if (data.artistList.length === 0) {
    reloadArtists(data);
  }

  return (
    <div className="ArtistAllPage">
      <Typography variant="h1">
        Browse all artists
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
  getArtistList(data);
}