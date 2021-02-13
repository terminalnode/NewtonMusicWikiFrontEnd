import './SongList.css';
import NewtonDataGrid from '../../../material/newton-data-grid/NewtonDataGrid';
import { useHistory } from 'react-router-dom';

const columns = [
  { field: 'name', headerName: 'Name', width: 250 },
  { field: 'albums', headerName: 'Albums', width: 110 },
  { field: 'artists', headerName: 'Artists', width: 130 },
];

function mapSongToRow(songs) {
  return songs.map(x => {
    return {
        id: x.id,
        name: x.name,
        albums: x.albums === null ? "n/a" : x.albums.length,
        artists: mapSongArtists(x.artists),
    };
  })
}

function mapSongArtists(artists) {
    if (artists === null || artists.length === 0) {
        return "none";
    }

    return artists
        .map(x => x.name)
        .join(", ");
}

function rowClick(row, history) {
  history.push(`/songs/${row.rowIds[0]}`);
}

export default function SongList({songs}) {
  const history = useHistory();

  return (
    <NewtonDataGrid
      columns={ columns }
      rows={ mapSongToRow(songs) }
      selectAction={ (newSelection) => rowClick(newSelection, history) }
    />
  );
}