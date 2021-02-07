import { Typography } from '@material-ui/core';
import { useContext } from 'react';
import { getAlbumList } from '../../../apis/albumActions';
import { DatabaseContext } from '../../../DatabaseContext';
import './AlbumPage.css';

function AlbumPage() {
  const data = useContext(DatabaseContext);
  if (data.albumList.length === 0) {
    reloadAlbums(data);
  }

  return (
    <div className="AlbumPage">
      <Typography variant="h1">
        Browse albums
      </Typography>
      <p>There should be albums here</p>
    </div>
  );
}

export default AlbumPage;

function reloadAlbums(data) {
  getAlbumList(data);
}