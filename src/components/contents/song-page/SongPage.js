import { getSongList } from '../../../apis/songActions';
import './SongPage.css';

function SongPage({songList}) {

  if (songList.get === "test") {
    getSongList(songList);
  }
  else {
    console.log("Updated Songs List", songList.get);
  }

  return (
    <div className="SongPage">
      <p>There should be songs here</p>
    </div>
  );
}

export default SongPage;