import { getArtistList } from '../../../../apis/artistActions';
import ArtistList from '../artist-list/ArtistList';
import './ArtistAllPage.css';
import { useContext } from 'react'
import { DatabaseContext } from '../../../../DatabaseContext'
import { Button } from '@material-ui/core';

export default function ArtistAllPage() {
  const data = useContext(DatabaseContext);
  if (data.artistList.length === 0) {
    reloadArtists(data);
  }

  return (
    <div className="ArtistAllPage">
      <Button
        onClick={ () => reloadArtists(data) }>
        Refresh
      </Button>
      <ArtistList artists={ data.artistList } />
    </div>
  );
}

function reloadArtists(data) {
    getArtistList(data);
}