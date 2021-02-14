import './SongDisplay.css';
import { Link, Typography } from "@material-ui/core";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleSong } from "../../../../apis/songActions";
import { DatabaseContext } from "../../../../DatabaseContext";

export default function SongDisplay() {
  const [ lastSongId, setLastSongId ] = useState(null);
  const data = useContext(DatabaseContext);
  const { id } = useParams();

  if (lastSongId !== id) {
    getSingleSong(data, id);
    setLastSongId(id);
    data.setPageTitle(`Song ${id}`);
    return displaySongMissing(id);
  }

  return displaySong(data.singleSong);
}

function displaySongMissing(id) {
  return (
    <div>
      NO SONG {id} LOL
    </div>
  );
}

function displaySong(song) {
  return (
    <div>
      <Typography variant='h1'>{song.name} (#{song.id})</Typography>
      <Typography variant='h5'>by {songToArtistList(song)}</Typography>
    </div>
  );
}

function songToArtistList(song) {
  if (!song.artists || song.artists.length === 0) {
    return "unknown";
  }

  return song.artists.map((x, i) => {
    return (
      <Link className="ArtistLink" path={`/artists/${x.id}`}>
        {x.name}{i === song.artists.length - 1 ? null : ', '}
      </Link>
    );
  });
}