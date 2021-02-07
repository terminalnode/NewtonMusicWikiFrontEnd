import { Typography } from '@material-ui/core';
import { useContext } from 'react';
import { getArtistList } from '../../../../apis/artistActions';
import { DatabaseContext } from '../../../../DatabaseContext'
import './ArtistPeoplePage.css';

export default function ArtistPeoplePage() {
  const data = useContext(DatabaseContext);
  if (data.artistList.length === 0) {
    reloadArtists(data);
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

function reloadArtists(data) {
  getArtistList(data);
}