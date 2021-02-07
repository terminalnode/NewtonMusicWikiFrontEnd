import './AlbumList.css';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'Id', width: 80 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'songs', headerName: 'songs', width: 90 },
  { field: 'artists', headerName: 'artists', width: 130 },
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
    if (artists === null) {
        return "none";
    }

    return artists
        .map(x => x.name)
        .join(", ");
}

export default function AlbumList({albums}) {
  return (
    <DataGrid
      autoHeight
      checkboxSelection
      color="primary"
      columns={ columns }
      rows={ mapAlbumToRow(albums) }
      pageSize={ 10 }
    />
  );
}