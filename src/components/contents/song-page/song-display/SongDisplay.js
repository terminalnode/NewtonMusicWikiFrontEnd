import './SongDisplay.css';
import { Box, Typography } from "@material-ui/core";
import { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getSingleSong } from "../../../../apis/songActions";
import { DatabaseContext } from "../../../../DatabaseContext";
import { mapArtistTypeToIcon } from "../../artist-page/artist-list/ArtistList";
import { getArtistList, removeSongFromArtist, addSongtoArtist } from '../../../../apis/artistActions';
import ArtistSelectList from '../../../material/artist-select-list/ArtistSelectList';

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
    ? displaySong(history, data)
    : displaySongMissing(id);
}

function displaySongMissing(id) {
  return (
    <div>
      NO SONG {id} LOL
    </div>
  );
}

function displaySong(history, data) {
  const song = data.singleSong;

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
      <ArtistSelectList
        artists={ data.artistList }
        preSelectedArtists={ song.artists }
        clickAction={ x => addSongtoArtist(x.id, song.id) }
        preSelectedClickAction={ x => removeSongFromArtist(x.id, song.id) }
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