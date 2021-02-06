import { Typography } from '@material-ui/core';
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
      <Typography variant="h1">
        Browse songs
      </Typography>

      <p>There should be songs here</p>
    </div>
  );
}

export default SongPage;