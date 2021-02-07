import { Button, Typography } from '@material-ui/core';
import { useContext } from 'react';
import { getPersonArtistList } from '../../../../apis/artistActions';
import { DatabaseContext } from '../../../../DatabaseContext'
import ArtistList from '../artist-list/ArtistList';
import './ArtistPeoplePage.css';

export default function ArtistPeoplePage() {
  const data = useContext(DatabaseContext);
  if (data.artistFetchType !== "PERSON") {
    reloadArtists(data);
  }

  return (
    <div className="ArtistPeoplePage">
      <Typography variant="h1">
        Browse individual artists
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
  getPersonArtistList(data);
}