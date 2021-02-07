import { Button, Typography } from '@material-ui/core';
import { useContext } from 'react';
import { getSongList } from '../../../apis/songActions';
import { DatabaseContext } from '../../../DatabaseContext';
import SongList from './song-list/SongList';
import './SongPage.css';

export default function SongPage() {
  const data = useContext(DatabaseContext);
  if (data.songList.length === 0) {
    reloadSongs(data);
  }

  return (
    <div className="SongPage">
      <Typography variant="h1">
        Browse songs
      </Typography>

      <div className="PageTop">
        <Button
          variant="outlined"
          color="primary"
          onClick={ () => reloadSongs(data) }>
            Refresh
          </Button>
      </div>

      <div className="PageBottom">
        <SongList songs={ data.songList } />
      </div>
    </div>
  );
}

function reloadSongs(data) {
  getSongList(data);
}