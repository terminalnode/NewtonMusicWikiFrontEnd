import './ArtistList.css';
import NewtonDataGrid from '../../../material/newton-data-grid/NewtonDataGrid';
import FaceIcon from '@material-ui/icons/Face';
import GroupIcon from '@material-ui/icons/Group';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Typography } from '@material-ui/core';

const columns = [
  { field: 'name', headerName: 'Performer', width: 250, renderCell: mapArtistNameWithIcon },
  { field: 'longitude', headerName: 'Long.', width: 95, renderCell: trimDecimals },
  { field: 'latitude', headerName: 'Lat.', width: 95, renderCell: trimDecimals },
];

function trimDecimals(params) {
  switch (params.value) {
    case null:
      return <HelpOutlineIcon />;
    default:
      return <Typography>{params.value.toFixed(3)}</Typography>;
  }
}

function mapArtistNameWithIcon(params) {
  return (
    <div>
      { mapArtistTypeToIcon(params.row['type']) } { params.value }
    </div>
  );
}

function mapArtistTypeToIcon(type) {
  switch (type) {
    case "Band":
      return <GroupIcon />;
    case "Person":
      return <FaceIcon />;
    default:
      return <HelpOutlineIcon />;
  }
}

function mapArtistToRow(artists) {
  return artists.map(x => {
    const artist = {};
    artist.id = x.id;
    artist.name = x.name;
    artist.latitude = x.latitude;
    artist.longitude = x.longitude;

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
  console.log(artists);
  return (
      <NewtonDataGrid
        columns={ columns }
        rows={ mapArtistToRow(artists) }
      />
  );
}