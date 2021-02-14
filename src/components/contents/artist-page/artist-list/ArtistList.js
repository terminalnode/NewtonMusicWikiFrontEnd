import './ArtistList.css';
import NewtonDataGrid from '../../../material/newton-data-grid/NewtonDataGrid';
import FaceIcon from '@material-ui/icons/Face';
import GroupIcon from '@material-ui/icons/Group';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { Tooltip, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const columns = [
  { field: 'name', headerName: 'Performer', width: 250, renderCell: mapArtistNameWithIcon },
  { field: 'longitude', headerName: 'Long.', width: 95, renderCell: trimDecimals },
  { field: 'latitude', headerName: 'Lat.', width: 95, renderCell: trimDecimals },
];

function trimDecimals(params) {
  switch (params.value) {
    case null:
      return (
        <Tooltip title='Location unknown'>
          <HelpOutlineIcon aria-label='location-unknown' />
        </Tooltip>);
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
    case 'Band':
      return (
        <Tooltip title='Band'>
          <GroupIcon aria-label='band-type' />
        </Tooltip>);
    case 'Person':
      return (
        <Tooltip title='Person'>
          <FaceIcon aria-label='person-type' />
        </Tooltip>);
    default:
      return (
        <Tooltip title='Unknown'>
          <HelpOutlineIcon aria-label='unknown-type' />
        </Tooltip>);
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
    } else if (x.artistType === 'BAND') {
      artist.type = 'Band';
    } else if (x.artistType === 'PERSON') {
      artist.type = 'Person';
    } else {
      artist.type = x.artistType;
    }

    return artist;
  })
}

function rowClick(row, history) {
  history.push(`/artists/${row.rowIds[0]}`);
}

export default function ArtistList({artists}) {
  const history = useHistory();

  return (
      <NewtonDataGrid
        columns={ columns }
        rows={ mapArtistToRow(artists) }
        selectAction={ (newSelection) => rowClick(newSelection, history) }
      />
  );
}