import './SongDisplay.css';
import { Box, Typography } from "@material-ui/core";
import { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getSingleSong } from "../../../../apis/songActions";
import { DatabaseContext } from "../../../../DatabaseContext";
import { mapArtistTypeToIcon, mapArtistToRow, artistColumns } from "../../artist-page/artist-list/ArtistList";
import NewtonButton from "../../../material/newton-button/NewtonButton";
import { getArtistList, removeSongFromArtist, addSongtoArtist } from '../../../../apis/artistActions';
import NewtonDataGrid from '../../../material/newton-data-grid/NewtonDataGrid';

export default function SongDisplay() {
  const [ lastSongId, setLastSongId ] = useState(null);
  const data = useContext(DatabaseContext);
  const { id } = useParams();
  const history = useHistory();

  if (lastSongId !== id) {
    getSingleSong(data, id);
    setLastSongId(id);
    data.setPageTitle(`Song ${id}`);
    return displaySongMissing(id);
  }

  if (data.artistFetchType !== "ALL") {
    getArtistList(data);
  }

  return data.singleSong
    ? displaySong(data.singleSong, history, data)
    : displaySongMissing(id);
}

function displaySongMissing(id) {
  return (
    <div>
      NO SONG {id} LOL
    </div>
  );
}

function displaySong(song, history, data) {
  return (
    <div>
      <Typography
        variant='h1'
        style={{ paddingBottom: '10px' }}
      >
        {song.name} (#{song.id})
      </Typography>
      <div className='ArtistLinkList'>
        {songToArtistList(song, history, data)}
      </div>

      <div style={{ paddingBottom: '10px' }} />

      <Typography variant='h5'>Add artists to song</Typography>
      <NewtonDataGrid
        columns={ artistColumns }
        rows={ mapArtistToRow(data.artistList) }
        selectAction={ (row) => {
          addSongtoArtist(row.rowIds[0], song.id)
            .then(getSingleSong(data, song.id))
        } }
      />
    </div>
  );
}

function songToArtistList(song, history, data) {
  if (!song.artists || song.artists.length === 0) {
    return "unknown";
  }

  return song.artists.map((x) => {
    return (
      <Box display="flex" flexDirection="row" style={{ paddingBottom: '10px', width: '100%' }}>
        <NewtonButton
          text = "Remove"
          action = { () => {
            removeSongFromArtist(x.id, song.id);
            getSingleSong(data, song.id);
          } }
        />
        <div style={{paddingLeft: '10px'}} />
        { mapArtistTypeToIcon(x.type) }
        <Typography
          variant='h5'
          className="ArtistLink"
          path={`/artists/${x.id}`}
          onClick={() => history.push(`/artists/${x.id}`)}
          style={{paddingLeft: '10px'}}
        >
          { x.name }
        </Typography>
      </Box>
    );
  });
}