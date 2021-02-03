import { getAlbumList } from '../../../apis/albumActions';
import './AlbumPage.css';

function AlbumPage({albumList}) {

  if (albumList.get === "test") {
    getAlbumList(albumList);
  }
  else {
    console.log("Updated Albums List", albumList.get);
  }


  return (
    <div className="AlbumPage">
      <p>There should be albums here</p>
    </div>
  );
}

export default AlbumPage;