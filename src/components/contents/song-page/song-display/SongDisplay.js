import './SongDisplay.css';
import { Box, Typography } from "@material-ui/core";
import { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getSingleSong } from "../../../../apis/songActions";
import { DatabaseContext } from "../../../../DatabaseContext";
import { mapArtistTypeToIcon } from "../../artist-page/artist-list/ArtistList";

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

  return data.singleSong
    ? displaySong(data.singleSong, history)
    : displaySongMissing(id);
}

function displaySongMissing(id) {
  return (
    <div>
      NO SONG {id} LOL
    </div>
  );
}

function displaySong(song, history) {
  return (
    <div>
      <Typography variant='h1'>{song.name} (#{song.id})</Typography>
      <div className='ArtistLinkList'>
        {songToArtistList(song, history)}
      </div>
    </div>
  );
}

function songToArtistList(song, history) {
  if (!song.artists || song.artists.length === 0) {
    return "unknown";
  }

  return song.artists.map((x) => {
    return (
      <Box display="flex" flexDirection="row">
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