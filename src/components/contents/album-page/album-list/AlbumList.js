import './AlbumList.css';
import NewtonDataGrid from '../../../material/newton-data-grid/NewtonDataGrid';
import { useHistory } from 'react-router-dom';

const columns = [
  { field: 'name', headerName: 'Name', width: 250 },
  { field: 'songs', headerName: 'Songs', width: 100 },
  { field: 'artists', headerName: 'Artists', width: 130 },
];

function mapAlbumToRow(albums) {
  return albums.map(x => {
    const album = {};
    album.id = x.id;
    album.name = x.name;
    album.songs = x.songs === null ? "n/a" : x.songs.length;
    album.artists = mapAlbumArtists(x.artists);

    return album;
  })
}

function mapAlbumArtists(artists) {
    if (artists === null || artists.length === 0) {
        return "none";
    }

    return artists
        .map(x => x.name)
        .join(", ");
}

function rowClick(row, history) {
  history.push(`/albums/${row.rowIds[0]}`);
}

export default function AlbumList({albums}) {
  const history = useHistory();

  return (
    <NewtonDataGrid
      columns={ columns }
      rows={ mapAlbumToRow(albums) }
      selectAction={ (newSelection) => rowClick(newSelection, history) }
    />
  );
}