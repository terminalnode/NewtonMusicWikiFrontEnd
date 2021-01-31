import { getArtistList } from '../../../../apis/artistActions';
import './ArtistBandPage.css';

function ArtistBandPage({artistList}) {
  // This isn't really working yet.
  if (artistList.get == null) {
    getArtistList(artistList);
  }

  return (
    <div className="ArtistBandPage">
      <p>There should be bands here</p>
    </div>
  );
}

export default ArtistBandPage;