import { Container, Typography } from "@material-ui/core";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArtist } from "../../../../apis/artistActions";
import { DatabaseContext } from "../../../../DatabaseContext";

export default function ArtistDisplay() {
  const [ lastArtistId, setLastArtistId ] = useState(null);

  const data = useContext(DatabaseContext);
  const { id } = useParams();
  data.setPageTitle(`Performer ${id}`);

  if (lastArtistId !== id) {
    getSingleArtist(data, id);
    setLastArtistId(id);
    return displayArtistMissing(id);
  } else {
  }

  console.log(data.singleArtist);
  return displayArtist(data.singleArtist);
}

function displayArtistMissing(id) {
  return (
    <div>
      NO ARTIST {id} LOL
    </div>
  );
}

function displayArtist(artist) {
  // artist.longitude (can be null)
  // artist.latitude (can be null)
  // artists.album (list)
  // artist.songs (list)
  return (
    <Container>
      <Typography variant='h1'>{artist.name}</Typography>
      <Typography>{artist.description}</Typography>
    </Container>
  );
}