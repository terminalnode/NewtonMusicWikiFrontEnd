import { getArtistList } from '../../../../apis/artistActions';
import './ArtistAllPage.css';

function ArtistAllPage({artistList}) {
  // This isn't really working yet.
  if (artistList.get == null) {
    getArtistList(artistList);
  }

  return (
    <div className="ArtistAllPage">
      <p>There should be artists here</p>
    </div>
  );
}

export default ArtistAllPage;