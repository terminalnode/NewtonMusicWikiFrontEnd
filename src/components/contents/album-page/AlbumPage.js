import { Button, Typography } from '@material-ui/core';
import { useContext } from 'react';
import { getAlbumList } from '../../../apis/albumActions';
import { DatabaseContext } from '../../../DatabaseContext';
import AlbumList from './album-list/AlbumList';
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

      <div className="PageTop">
        <Button
          variant="outlined"
          color="primary"
          onClick={ () => reloadAlbums(data) }>
            Refresh
          </Button>
      </div>

      <div className="PageBottom">
        <AlbumList albums={ data.albumList } />
      </div>
    </div>
  );
}

export default AlbumPage;

function reloadAlbums(data) {
  getAlbumList(data);
}