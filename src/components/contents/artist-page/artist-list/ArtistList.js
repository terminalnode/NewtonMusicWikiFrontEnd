import './ArtistList.css';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'Id', width: 80 },
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'type', headerName: 'Type', width: 90 },
  { field: 'longitude', headerName: 'Longitude', width: 130 },
  { field: 'latitude', headerName: 'Latitude', width: 130 },
];

function mapArtistToRow(artists) {
  return artists.map(x => {
    const artist = {};
    artist.id = x.id;
    artist.name = x.name;
    artist.latitude = x.latitude === null ? "n/a" : x.latitude;
    artist.longitude = x.longitude === null ? "n/a" : x.longitude;

    if (x.artistType === null) {
      artist.type = "n/a";
    } else if (x.artistType === "BAND") {
      artist.type = "Band";
    } else if (x.artistType === "PERSON") {
      artist.type = "Person";
    } else {
      artist.type = x.artistType;
    }

    return artist;
  })
}

export default function ArtistList({artists}) {
  return (
    <DataGrid
      autoHeight
      checkboxSelection
      color="primary"
      columns={ columns }
      rows={ mapArtistToRow(artists) }
      pageSize={ 10 }
    />
  );
}