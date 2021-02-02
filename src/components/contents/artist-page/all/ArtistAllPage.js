import { getArtistList } from '../../../../apis/artistActions';
import './ArtistAllPage.css';

function ArtistAllPage({artistList}) {

  // This isn't really working yet.
  if (artistList.get === "test") {
    getArtistList(artistList);
  }
  else {
    console.log("Updated Artists List",artistList.get);
  }

  return (
    <div className="ArtistAllPage">
      <p>There should be artists here</p>
    </div>
  );
}

export default ArtistAllPage;