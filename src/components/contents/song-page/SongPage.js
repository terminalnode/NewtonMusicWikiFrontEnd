import { Typography } from '@material-ui/core';
import { useContext } from 'react';
import { getSongList } from '../../../apis/songActions';
import { DatabaseContext } from '../../../DatabaseContext';
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

      <p>There should be songs here</p>
    </div>
  );
}

function reloadSongs(data) {
  getSongList(data);
}