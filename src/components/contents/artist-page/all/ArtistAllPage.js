import { getArtistList } from '../../../../apis/artistActions';
import ArtistList from '../artist-list/ArtistList';
import './ArtistAllPage.css';
import { useContext } from 'react'
import { DatabaseContext } from '../../../../DatabaseContext'

function ArtistAllPage({}) {
  const data = useContext(DatabaseContext);
  if ( data.artistList.length === 0 ) {
    console.log("Updating ArtistList...");
    getArtistList(data);
  } else {
    console.log("Updated Artists List", data.artistList);
  }

  return (
    <div className="ArtistAllPage">
      <ArtistList artists={ data.artistList } />
    </div>
  );
}

export default ArtistAllPage;